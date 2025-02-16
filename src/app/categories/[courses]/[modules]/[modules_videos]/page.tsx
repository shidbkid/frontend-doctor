"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { fetchVideosByModuleId, Video } from "@/data/videos";

export default function ModuleVideosPage() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get("moduleId");

  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!moduleId) return;

    setLoading(true);
    fetchVideosByModuleId(parseInt(moduleId))
      .then((data) => {
        setVideos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Fetch error:", err.message);
        setError("Failed to load videos.");
        setLoading(false);
      });
  }, [moduleId]);

  if (!moduleId || error) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            {error || "Module not found."}
          </h2>
        </div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">Loading videos...</h2>
        </div>
      </Layout>
    );
  }

  if (videos.length === 0) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            No videos available for this module.
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospitalBlue">
          Videos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={`/categories/courses/modules/modules_videos/video?videoId=${video.id}`}
              className="block p-6 rounded-lg shadow-md bg-white hover:bg-hospitalBlue hover:text-white transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
              <p className="text-sm text-gray-500">Views: {video.views}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
