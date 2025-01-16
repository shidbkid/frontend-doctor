"use client";

import { useRouter } from "next/router";

export default function CourseDetails() {
  const router = useRouter();
  const { id } = router.query;

  const courses = {
    "1": {
      title: "Cardiothoracic Surgery",
      description: "Master heart and lung surgeries with expert guidance.",
      syllabus: ["CABG Basics", "Valve Replacement", "Lung Resection"],
      instructor: "Dr. John Doe",
    },
    "2": {
      title: "Orthopedic Surgery",
      description: "Learn fracture management and joint replacements.",
      syllabus: ["Hip Replacement", "Spinal Surgery", "Knee Arthroscopy"],
      instructor: "Dr. Jane Smith",
    },
    "3": {
      title: "Neurosurgery Essentials",
      description: "Explore surgical techniques for brain and spinal disorders.",
      syllabus: ["Brain Tumor Resection", "Spinal Decompression"],
      instructor: "Dr. William Carter",
    },
    "4": {
      title: "Plastic Surgery",
      description: "Learn advanced techniques in cosmetic and reconstructive surgery.",
      syllabus: ["Breast Reconstruction", "Cleft Lip Repair", "Skin Grafting"],
      instructor: "Dr. Sarah White",
    },
  };

  const course = courses[id as keyof typeof courses];

  if (!course) {
    return <div className="text-center mt-20">Course not found!</div>;
  }

  return (
    <section className="py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-6">{course.title}</h1>
      <p className="text-center text-lg mb-6">{course.description}</p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Syllabus</h2>
        <ul className="list-disc pl-6">
          {course.syllabus.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Instructor</h2>
        <p>{course.instructor}</p>
      </div>
    </section>
  );
}
