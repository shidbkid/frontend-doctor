"use client";
import { useParams } from "next/navigation";
import { categories } from "../../../data/categories";
import { courses } from "../../../data/courses";
import Navbar from "../../../components/Navbar";
import CourseCard from "../../../components/CourseCard";

export default function CategoryPage() {
  const { categoryId } = useParams();

  // Find the category
  const category = categories.find((cat) => cat.id === categoryId);

  // Filter courses by categoryId
  const filteredCourses = courses.filter(
    (course) => course.categoryId === categoryId
  );

  if (!category) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <p className="mt-4 text-gray-600">
            The category you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="py-16 px-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mt-10 mb-8">{category.title}</h1>
        <p className="text-center mb-12 text-gray-700">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              color={course.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
