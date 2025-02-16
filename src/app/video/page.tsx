"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import API_BASE_URL from "@/config/apiConfig";
import Navbar from "@/components/Navbar";
import VideoPlayer from "@/components/VideoPlayer";

// Define TypeScript interface for Video
interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: number;
  status: string;
  views: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}

export default function VideoPage() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get("videoId"); // ✅ Get videoId from query params
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!videoId) {
      setError("No video ID provided");
      setLoading(false);
      return;
    }

    console.log(`Fetching video from: ${API_BASE_URL}/videos/${videoId}`);

    axios.get(`${API_BASE_URL}/videos/${videoId}`)
      .then((response) => {
        console.log("Video data received:", response.data); // ✅ Check API response
        setVideo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching video:", err);
        setError("Video not found");
        setLoading(false);
      });
  }, [videoId]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold">Loading Video...</h1>
        </div>
      </div>
    );
  }

  if (error || !video) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold text-red-500">{error}</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="py-16 px-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8">{video.title}</h1>
        <div className="max-w-5xl mx-auto">
          <VideoPlayer videoUrl={video.url} />
          <p className="mt-6 text-gray-700">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
