"use client";

import { useParams } from "next/navigation";
import { videos } from "@/data/videos"; // Ensure this path is correct
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";

export default function VideoPage() {
  const { videoId } = useParams();

  const selectedVideo = videos.find((video) => video.id === videoId);

  if (!selectedVideo) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold">Video Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="py-16 px-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8">{selectedVideo.title}</h1>
        <div className="max-w-5xl mx-auto">
          {/* Pass the videoUrl prop here */}
          <VideoPlayer videoUrl={selectedVideo.url} />
          <p className="mt-6 text-gray-700">{selectedVideo.description}</p>
        </div>
      </div>
    </div>
  );
}
