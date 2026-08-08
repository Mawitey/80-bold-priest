import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createPrivateKey } from "node:crypto";
import { createRemoteJWKSet, jwtVerify, SignJWT } from "jose";
import { getCognitoConfig, getCourseConfig } from "@/lib/cognito";
import { courseCategories } from "@/lib/courses";
import CourseLibrary, { type ProtectedLesson } from "./CourseLibrary";
import { LanguageSwitcher, LocalizedText } from "../LanguageProvider";

function muxPrivateKey(value: string) {
  const normalized = value.replace(/\\n/g, "\n").trim();
  if (normalized.includes("BEGIN")) return normalized;
  return Buffer.from(normalized, "base64").toString("utf8");
}

export default async function Dashboard() {
  const token = (await cookies()).get("bp_id_token")?.value;
  if (!token) redirect("/api/auth/login");

  try {
    const config = getCognitoConfig();
    const course = getCourseConfig();
    const jwks = createRemoteJWKSet(new URL(`${config.issuer}/.well-known/jwks.json`));
    const { payload } = await jwtVerify(token, jwks, {
      issuer: config.issuer,
      audience: config.clientId,
    });
    const email = typeof payload.email === "string" ? payload.email : "ዝኣተወ ተማሃራይ";

    const accessResponse = await fetch(
      `${course.courseApiUrl.replace(/\/$/, "")}/course-access`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      },
    );

    if (accessResponse.status === 401 || accessResponse.status === 403) {
      redirect("/api/auth/login");
    }
    if (!accessResponse.ok) throw new Error("Course access service unavailable");

    const access = (await accessResponse.json()) as { hasAccess?: boolean };
    let protectedCategories: Array<{
      id: string;
      name: string;
      title: string;
      lessons: ProtectedLesson[];
    }> | null = null;

    if (access.hasAccess) {
      const signingKey = createPrivateKey(muxPrivateKey(course.muxSigningPrivateKey));
      const signMuxToken = (playbackId: string, audience: "v" | "t" | "s") =>
        new SignJWT({ sub: playbackId, aud: audience })
          .setProtectedHeader({ alg: "RS256", kid: course.muxSigningKeyId })
          .setIssuedAt()
          .setExpirationTime("6h")
          .sign(signingKey);

      protectedCategories = await Promise.all(
        courseCategories.map(async (category) => ({
          ...category,
          lessons: await Promise.all(
            category.lessons.map(async (lesson) => {
              const [playbackToken, thumbnailToken, storyboardToken] = await Promise.all([
                signMuxToken(lesson.playbackId, "v"),
                signMuxToken(lesson.playbackId, "t"),
                signMuxToken(lesson.playbackId, "s"),
              ]);
              return { ...lesson, playbackToken, thumbnailToken, storyboardToken };
            }),
          ),
        })),
      );
    }

    return (
      <main className="account-page">
        <header className="account-header">
          <a className="brand" href="/"><span className="brand-mark">80</span><span><LocalizedText ti="ተባዕ ካህን" en="Bold Priest" /></span></a>
          <div className="account-nav"><LanguageSwitcher /><a className="secondary-button" href="/api/auth/logout"><LocalizedText ti="ውጻእ" en="Log out" /></a></div>
        </header>
        <section className="account-card">
          <p className="eyebrow"><LocalizedText ti="መቆጻጸሪ ገጽ ተማሃራይ" en="Student dashboard" /></p>
          <h1><LocalizedText ti="እንቋዕ ብደሓን መጻእኩም።" en="Welcome back." /></h1>
          <p>{access.hasAccess ? <LocalizedText ti="ክፍሊትኩም ተረጋጊጹ እዩ። ትምህርትኹም ኣብ ታሕቲ ክትከታተሉ ትኽእሉ።" en="Your payment is confirmed. You can watch your lessons below." /> : <LocalizedText ti="ነዚ ትምህርቲ ንምርኣይ መጀመርታ ክፍሊት ወድኡ። ኣብ Stripeን ኣብ መእተዊኹምን ሓደ ኢመይል ተጠቐሙ።" en="Complete payment first to watch these lessons. Use the same email for payment and login." />}</p>
          <span className="account-email">{email}</span>
          {protectedCategories ? (
            <div className="protected-categories">
              {protectedCategories.map((category) => (
                <CourseLibrary
                  key={category.id}
                  categoryName={category.name}
                  categoryTitle={category.title}
                  lessons={category.lessons}
                />
              ))}
            </div>
          ) : (
            <div className="account-actions">
              <a className="primary-button" href="/#course"><LocalizedText ti="ክፍሊት ወድእ" en="Complete payment" /></a>
            </div>
          )}
        </section>
      </main>
    );
  } catch (error) {
    console.error("Dashboard load failed", error);
    return (
      <main className="account-page">
        <header className="account-header">
          <a className="brand" href="/"><span className="brand-mark">80</span><span><LocalizedText ti="ተባዕ ካህን" en="Bold Priest" /></span></a>
          <div className="account-nav"><LanguageSwitcher /><a className="secondary-button" href="/api/auth/logout"><LocalizedText ti="ውጻእ" en="Log out" /></a></div>
        </header>
        <section className="account-card error-card">
          <p className="eyebrow"><LocalizedText ti="ግዝያዊ ጸገም" en="Temporary problem" /></p>
          <h1><LocalizedText ti="ትምህርቲ ክጽዕን ኣይከኣለን።" en="The course could not be loaded." /></h1>
          <p><LocalizedText ti="መእተዊኹም ተቐቢልናዮ ኣለና፣ ግን ፍቓድ ትምህርቲ ሕጂ ክረጋገጽ ኣይከኣለን።" en="Your login worked, but your course access could not be verified right now." /></p>
          <div className="account-actions">
            <a className="secondary-button" href="/api/auth/logout"><LocalizedText ti="ውጻእ እሞ ደጊምኩም ፈትኑ" en="Log out and try again" /></a>
          </div>
        </section>
      </main>
    );
  }
}
