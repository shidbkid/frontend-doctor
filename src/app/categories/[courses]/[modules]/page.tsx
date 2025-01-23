"use client";

import { useSearchParams } from "next/navigation";
import { modules } from "@/data/modules";
import Link from "next/link";

export default function ModulesPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId"); // Extract the courseId from the query

  // Filter modules for the given courseId
  const filteredModules = modules.filter((module) => module.courseId === courseId);

  if (!courseId) {
    return <div>Please select a course to view modules.</div>;
  }

  if (filteredModules.length === 0) {
    return <div>No modules available for this course.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">Modules</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredModules.map((module) => (
          <Link
            key={module.id}
            href={`/categories/courses/modules/modules_videos?moduleId=${module.id}`}
            className="block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
            <p className="text-gray-600">{module.videos.length} videos</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
