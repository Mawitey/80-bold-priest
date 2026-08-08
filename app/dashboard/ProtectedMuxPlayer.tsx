"use client";

import MuxPlayer from "@mux/mux-player-react";

export default function ProtectedMuxPlayer({
  playbackId,
  playbackToken,
  thumbnailToken,
  storyboardToken,
  videoTitle,
  videoPart,
}: {
  playbackId: string;
  playbackToken: string;
  thumbnailToken: string;
  storyboardToken: string;
  videoTitle: string;
  videoPart: number;
}) {
  return (
    <MuxPlayer
      playbackId={playbackId}
      tokens={{
        playback: playbackToken,
        thumbnail: thumbnailToken,
        storyboard: storyboardToken,
      }}
      metadata={{
        video_id: `kibri-amlak-part-${videoPart}`,
        video_title: videoTitle,
      }}
      accentColor="#ff8a1f"
    />
  );
}
