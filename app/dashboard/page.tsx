import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createPrivateKey } from "node:crypto";
import { createRemoteJWKSet, jwtVerify, SignJWT } from "jose";
import { getCognitoConfig, getCourseConfig } from "@/lib/cognito";
import { courseCategories } from "@/lib/courses";
import CourseLibrary, { type ProtectedLesson } from "./CourseLibrary";

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
    let protectedLessons: ProtectedLesson[] | null = null;

    if (access.hasAccess) {
      const signingKey = createPrivateKey(muxPrivateKey(course.muxSigningPrivateKey));
      const signMuxToken = (playbackId: string, audience: "v" | "t" | "s") =>
        new SignJWT({ sub: playbackId, aud: audience })
          .setProtectedHeader({ alg: "RS256", kid: course.muxSigningKeyId })
          .setIssuedAt()
          .setExpirationTime("6h")
          .sign(signingKey);

      protectedLessons = await Promise.all(
        courseCategories[0].lessons.map(async (lesson) => {
          const [playbackToken, thumbnailToken, storyboardToken] = await Promise.all([
            signMuxToken(lesson.playbackId, "v"),
            signMuxToken(lesson.playbackId, "t"),
            signMuxToken(lesson.playbackId, "s"),
          ]);
          return { ...lesson, playbackToken, thumbnailToken, storyboardToken };
        }),
      );
    }

    return (
      <main className="account-page">
        <header className="account-header">
          <a className="brand" href="/"><span className="brand-mark">80</span><span>ተባዕ ካህን</span></a>
          <a className="secondary-button" href="/api/auth/logout">ውጻእ</a>
        </header>
        <section className="account-card">
          <p className="eyebrow">መቆጻጸሪ ገጽ ተማሃራይ</p>
          <h1>እንቋዕ ብደሓን መጻእኩም።</h1>
          <p>{access.hasAccess ? "ክፍሊትኩም ተረጋጊጹ እዩ። ትምህርትኹም ኣብ ታሕቲ ክትከታተሉ ትኽእሉ።" : "ነዚ ትምህርቲ ንምርኣይ መጀመርታ ክፍሊት ወድኡ። ኣብ Stripeን ኣብ መእተዊኹምን ሓደ ኢመይል ተጠቐሙ።"}</p>
          <span className="account-email">{email}</span>
          {protectedLessons ? (
            <CourseLibrary
              categoryName={courseCategories[0].name}
              categoryTitle={courseCategories[0].title}
              lessons={protectedLessons}
            />
          ) : (
            <div className="account-actions">
              <a className="primary-button" href="/#course">ክፍሊት ወድእ</a>
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
          <a className="brand" href="/"><span className="brand-mark">80</span><span>ተባዕ ካህን</span></a>
          <a className="secondary-button" href="/api/auth/logout">ውጻእ</a>
        </header>
        <section className="account-card error-card">
          <p className="eyebrow">ግዝያዊ ጸገም</p>
          <h1>ትምህርቲ ክጽዕን ኣይከኣለን።</h1>
          <p>መእተዊኹም ተቐቢልናዮ ኣለና፣ ግን ፍቓድ ትምህርቲ ሕጂ ክረጋገጽ ኣይከኣለን።</p>
          <div className="account-actions">
            <a className="secondary-button" href="/api/auth/logout">ውጻእ እሞ ደጊምኩም ፈትኑ</a>
          </div>
        </section>
      </main>
    );
  }
}
