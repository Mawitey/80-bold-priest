"use client";

import { useState } from "react";
import { useLanguage } from "../LanguageProvider";
import ProtectedMuxPlayer from "./ProtectedMuxPlayer";

export type ProtectedLesson = {
  part: number;
  title: string;
  playbackId: string;
  playbackToken: string;
  thumbnailToken: string;
  storyboardToken: string;
};

export default function CourseLibrary({
  categoryName,
  categoryTitle,
  lessons,
}: {
  categoryName: string;
  categoryTitle: string;
  lessons: ProtectedLesson[];
}) {
  const { language } = useLanguage();
  const [selectedPart, setSelectedPart] = useState(lessons[0]?.part);
  const selectedLesson = lessons.find((lesson) => lesson.part === selectedPart) ?? lessons[0];

  if (!selectedLesson) return null;

  return (
    <section className="course-library">
      <div className="category-heading">
        <p className="category-label">{language === "ti" ? "ምድብ" : "Category"}</p>
        <h2>{language === "ti" ? categoryTitle : categoryName}</h2>
        <p>{language === "ti" ? `${lessons.length} ትምህርቲ ቪድዮ` : `${lessons.length} video lessons`}</p>
      </div>

      <div className="protected-video">
        <ProtectedMuxPlayer
          key={selectedLesson.playbackId}
          playbackId={selectedLesson.playbackId}
          playbackToken={selectedLesson.playbackToken}
          thumbnailToken={selectedLesson.thumbnailToken}
          storyboardToken={selectedLesson.storyboardToken}
          videoTitle={selectedLesson.title}
          videoPart={selectedLesson.part}
        />
      </div>

      <h3 className="now-playing">{language === "ti" ? selectedLesson.title : `Glory of God (Part ${selectedLesson.part})`}</h3>
      <div className="dashboard-lessons" aria-label={`${categoryName} lessons`}>
        {lessons.map((lesson) => (
          <button
            className={`dashboard-lesson${lesson.part === selectedLesson.part ? " selected" : ""}`}
            key={lesson.playbackId}
            onClick={() => setSelectedPart(lesson.part)}
            type="button"
          >
            <span>{String(lesson.part).padStart(2, "0")}</span>
            <strong>{language === "ti" ? lesson.title : `Glory of God (Part ${lesson.part})`}</strong>
            <small>{lesson.part === selectedLesson.part ? (language === "ti" ? "ሕጂ ይጻወት" : "Now playing") : (language === "ti" ? "ክፈት" : "Open")}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
