"use client";

import { useParams } from "next/navigation";

const courseDetails: Record<string, { title: string; description: string; content: string; duration: string; prerequisites: string }> = {
  "1": {
    title: "Cardiothoracic Surgery",
    description: "Learn advanced techniques for heart and lung surgeries.",
    content:
      "This course covers procedures like CABG, valve replacement, thoracic trauma management, and lung transplantation.",
    duration: "6 weeks",
    prerequisites: "Basic knowledge of anatomy and general surgery.",
  },
  "2": {
    title: "Orthopedic Surgery",
    description: "Master modern orthopedic techniques.",
    content:
      "Focus on joint replacements, fracture management, arthroscopy, and spinal surgery basics.",
    duration: "8 weeks",
    prerequisites: "Experience in musculoskeletal anatomy.",
  },
  "3": {
    title: "Neurosurgery Essentials",
    description: "Explore surgical techniques for treating brain disorders.",
    content:
      "Gain insights into craniotomy, minimally invasive brain surgery, and spinal decompression techniques.",
    duration: "10 weeks",
    prerequisites: "Understanding of neuroanatomy and surgical tools.",
  },
};

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id;

  // Ensure courseId is valid and is a string
  if (!courseId || typeof courseId !== "string" || !(courseId in courseDetails)) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold text-red-500">Course Not Found</h1>
        <p className="mt-4">
          The course you are looking for does not exist. Please go back and select a valid course.
        </p>
      </div>
    );
  }

  const course = courseDetails[courseId];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-4 text-green-500">{course.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{course.description}</p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2">Course Content</h2>
        <p className="text-gray-600 mb-4">{course.content}</p>
        <h2 className="text-2xl font-bold mb-2">Course Details</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <strong>Duration:</strong> {course.duration}
          </li>
          <li>
            <strong>Prerequisites:</strong> {course.prerequisites}
          </li>
        </ul>
      </div>
    </div>
  );
}
