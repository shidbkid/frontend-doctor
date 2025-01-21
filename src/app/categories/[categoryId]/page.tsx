"use client";

import { useParams } from "next/navigation";
import { categories } from "../../../data/categories";
import { courses } from "../../../data/courses";
import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function CoursesPage() {
  const { categoryId } = useParams();

  const category = categories.find((cat) => cat.id === categoryId);
  const filteredCourses = courses.filter((course) => course.categoryId === categoryId);

  if (!category) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <p className="mt-4 text-gray-600">The selected category does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="py-16 px-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mt-10 mb-8">{category.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/categories/${categoryId}/courses/${course.id}`}
              className="block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
