"use client";

import { useSearchParams } from "next/navigation";
import { videos } from "@/data/videos";
import VideoPlayer from "@/components/VideoPlayer";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId"); // Extract the videoId from the query

  // Find the selected video
  const selectedVideo = videos.find((video) => video.id === videoId);

  if (!videoId || !selectedVideo) {
    return <div>Video not found.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">{selectedVideo.title}</h1>
      <div className="max-w-4xl mx-auto">
        <VideoPlayer videoUrl={selectedVideo.url} />
        <p className="text-gray-700 mt-6">{selectedVideo.description}</p>
      </div>
    </div>
  );
}
