"use client";

import { useSearchParams } from "next/navigation";
import { modules } from "@/data/modules";
import Link from "next/link";
import Layout from "@/components/Layout"; // Import the Layout component

export default function ModuleVideosPage() {
  const searchParams = useSearchParams();
  const moduleId = searchParams.get("moduleId"); // Extract the moduleId from the query

  // Find the selected module
  const selectedModule = modules.find((module) => module.id === moduleId);

  if (!moduleId || !selectedModule) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            Module not found.
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospitalBlue">
          {selectedModule.title}
        </h1>
        <p className="text-center text-gray-600 mb-12">{selectedModule.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedModule.videos.map((video) => (
            <Link
              key={video.id}
              href={`/categories/courses/modules/modules_videos/video?videoId=${video.id}`}
              className="block p-6 rounded-lg shadow-md bg-white hover:bg-hospitalBlue hover:text-white transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p className="text-gray-600">{video.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
