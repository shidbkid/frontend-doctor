"use client";

import { useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";
import Link from "next/link";

export default function CoursesPage() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId"); // Get the query parameter

  // Filter courses by the provided categoryId
  const filteredCourses = courses.filter((course) => course.categoryId === categoryId);

  if (!categoryId) {
    return <div>Please select a category to view courses.</div>;
  }

  if (filteredCourses.length === 0) {
    return <div>No courses available for this category.</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10 mb-8">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <Link
            key={course.id}
            href={`/categories/courses/modules?courseId=${course.id}`}
            className="block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-100"
          >
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
