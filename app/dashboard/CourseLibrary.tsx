"use client";

import { useState } from "react";
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
  const [selectedPart, setSelectedPart] = useState(lessons[0]?.part);
  const selectedLesson = lessons.find((lesson) => lesson.part === selectedPart) ?? lessons[0];

  if (!selectedLesson) return null;

  return (
    <section className="course-library">
      <div className="category-heading">
        <p className="category-label">Category: {categoryName}</p>
        <h2 lang="ti">{categoryTitle}</h2>
        <p>{lessons.length} ትምህርቲ ቪድዮ</p>
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

      <h3 className="now-playing" lang="ti">{selectedLesson.title}</h3>
      <div className="dashboard-lessons" aria-label={`${categoryName} lessons`}>
        {lessons.map((lesson) => (
          <button
            className={`dashboard-lesson${lesson.part === selectedLesson.part ? " selected" : ""}`}
            key={lesson.playbackId}
            onClick={() => setSelectedPart(lesson.part)}
            type="button"
          >
            <span>{String(lesson.part).padStart(2, "0")}</span>
            <strong lang="ti">{lesson.title}</strong>
            <small>{lesson.part === selectedLesson.part ? "ሕጂ ይጻወት" : "ክፈት"}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
