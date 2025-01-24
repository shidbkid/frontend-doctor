"use client";

import { useSearchParams } from "next/navigation";
import { modules } from "@/data/modules";
import Link from "next/link";
import Layout from "@/components/Layout"; // Import the Layout component

export default function ModulesPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId"); // Extract the courseId from the query

  // Filter modules for the given courseId
  const filteredModules = modules.filter((module) => module.courseId === courseId);

  if (!courseId) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            Please select a course to view modules.
          </h2>
        </div>
      </Layout>
    );
  }

  if (filteredModules.length === 0) {
    return (
      <Layout>
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            No modules available for this course.
          </h2>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6 sm:p-8 lg:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-hospitalBlue">
          Modules
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <Link
              key={module.id}
              href={`/categories/courses/modules/modules_videos?moduleId=${module.id}`}
              className="block p-6 rounded-lg shadow-md bg-white hover:bg-hospitalBlue hover:text-white transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
              <p className="text-gray-600">{module.videos.length} videos</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
