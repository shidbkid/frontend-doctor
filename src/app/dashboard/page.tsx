"use client";

import CourseCompleted from "../../components/CourseCompleted";
import CompletionGraph from "../../components/CompletionGraph";
import TimeSpent from "@/components/TimeSpent";
//import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Certifications from "@/components/Certifications";
import Layout from "@/components/Layout";
export default function DashboardPage() {
  return (
    <Layout>
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Courses Completed */}
      <section className="mb-8">
        <CourseCompleted />
      </section>
        {/* Course Completion Graph */}
        <section className="mb-8">
        <CompletionGraph />
      </section>
      <section className="mb-8">
        <TimeSpent/>
      </section>
      <section className="mb-8">
        <Certifications/>
      </section>

    </div>
    </Layout>
  );
}
