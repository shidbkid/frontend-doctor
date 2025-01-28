"use client";
import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import Notes from "@/components/Notes";
import Layout from "@/components/Layout";
import { videos } from "@/data/videos";
import { useSearchParams } from "next/navigation";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const [videoId, setVideoId] = useState<string | null>(null);
  const [notes, setNotes] = useState<{ timestamp: number; note: string; important: boolean }[]>([]);
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0); // Track video timestamp
  const [isLoading, setIsLoading] = useState(true);

  const videoUrl = "/videos/1.mp4";

  useEffect(() => {
    const id = searchParams.get("videoId");
    setVideoId(id);
    setIsLoading(false);
  }, [searchParams]);

  const selectedVideo = videos.find((video) => video.id === videoId);

  const seekToTimestamp = (timestamp: number) => {
    const videoPlayer = document.querySelector<HTMLVideoElement>("video");
    if (videoPlayer && Number.isFinite(timestamp)) {
      videoPlayer.currentTime = timestamp; // Native HTML5 seek
      videoPlayer.play();
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Loading...</h2>
        </div>
      </Layout>
    );
  }

  if (!videoId || !selectedVideo) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Video not found.</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row p-6 sm:p-8 lg:p-12">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Video List</h2>
          <ul className="space-y-4">
            {videos.map((video) => (
              <li key={video.id}>
                <a
                  href={`?videoId=${video.id}`}
                  className={`block px-4 py-2 rounded-lg ${
                    video.id === videoId ? "bg-hospitalBlue text-white" : "hover:bg-gray-200"
                  }`}
                >
                  {video.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6 text-hospitalBlue text-center">
            {selectedVideo.title}
          </h1>
          <div>
            <VideoPlayer
              videoUrl={videoUrl}
              getCurrentTimestamp={(timestamp) => setCurrentTimestamp(timestamp)} // Update timestamp here
            />

            <p className="text-gray-700 mt-4">{selectedVideo.description}</p>
          </div>

          <Notes
            currentTimestamp={currentTimestamp} // Pass the current timestamp
            onAddNote={(timestamp: number) => {
              setNotes((prevNotes) => [
                ...prevNotes,
                { timestamp, note: "New Note", important: false },
              ]);
            }}
            seekToTimestamp={seekToTimestamp}
            notes={notes}
            setNotes={setNotes}
          />
        </div>
      </div>
    </Layout>
  );
}
