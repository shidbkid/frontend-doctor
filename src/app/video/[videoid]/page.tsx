"use client";

import { useParams } from "next/navigation";
import { modules } from "../../../data/modules";
import VideoPlayer from "../../../components/VideoPlayer";

export default function VideoPage() {
  const { videoId } = useParams();

  // Find the video
  const video = modules
    .flatMap((module) => module.videos)
    .find((vid) => vid.id === videoId);

  if (!video) {
    return (
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold">Video Not Found</h1>
        <p className="mt-4 text-gray-600">The requested video could not be found.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">{video.title}</h1>
      <VideoPlayer videoUrl={video.id} />
    </div>
  );
}
