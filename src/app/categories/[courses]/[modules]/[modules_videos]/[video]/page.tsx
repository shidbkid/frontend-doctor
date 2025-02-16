"use client";

import React, { useState, useEffect } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import Notes from "@/components/Notes";
import Layout from "@/components/Layout";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import API_BASE_URL from "@/config/apiConfig";
import { fetchVideosByModuleId, Video } from "@/data/videos";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const videoId = searchParams.get("videoId");

  const [video, setVideo] = useState<Video | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentTimestamp, setCurrentTimestamp] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!videoId) {
      setError("No video ID provided");
      setIsLoading(false);
      return;
    }

    const numericId = parseInt(videoId, 10);
    if (isNaN(numericId)) {
      setError("Invalid video ID format.");
      setIsLoading(false);
      return;
    }

    // Fetch video details
    axios
      .get(`${API_BASE_URL}/videos/${numericId}`)
      .then((response) => {
        setVideo(response.data);
        return fetchVideosByModuleId(response.data.module.id);
      })
      .then((allVideos) => {
        setVideos(allVideos);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Video not found");
        setIsLoading(false);
      });
  }, [videoId]);

  const seekToTimestamp = (timestamp: number) => {
    const videoPlayer = document.querySelector<HTMLVideoElement>("video");
    if (videoPlayer && Number.isFinite(timestamp)) {
      videoPlayer.currentTime = timestamp;
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

  if (error || !video) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">{error}</h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Sidebar - List of Videos */}
        <div className="w-full lg:w-1/4 bg-gray-100 p-6 border-r overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Videos in this module</h2>
          <ul className="space-y-2">
            {videos.map((vid) => (
              <li key={vid.id}>
                <button
                  onClick={() => router.push(`/categories/courses/modules/modules_videos/video?videoId=${vid.id}`)}
                  className={`block w-full text-left p-3 rounded-lg ${
                    vid.id === parseInt(videoId ?? '') ? "bg-hospitalBlue text-white" : "bg-white hover:bg-gray-200"
                  }`}
                >
                  {vid.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content - Video Player and Notes */}
        <div className="flex-1 p-6">
          <h1 className="text-4xl font-bold mb-6 text-hospitalBlue text-center">{video.title}</h1>
          <VideoPlayer videoUrl={video.url} getCurrentTimestamp={(timestamp) => setCurrentTimestamp(timestamp)} />
          <p className="text-gray-700 mt-4">{video.description}</p>

          {/* Notes Section */}
          <Notes
            currentTimestamp={currentTimestamp}
            onAddNote={(timestamp: number) => {
              // Add new note at the current timestamp
            }}
            seekToTimestamp={seekToTimestamp}
            notes={[]} // Pass state of notes here
            setNotes={() => {}} // Set function for managing notes
          />
        </div>
      </div>
    </Layout>
  );
}
