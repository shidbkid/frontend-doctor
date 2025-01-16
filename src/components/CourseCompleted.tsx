export default function CourseCompleted() {
    const completedCourses = [
      { id: 1, name: "Introduction to Robotics" },
      { id: 2, name: "Advanced Cardiothoracic Techniques" },
      { id: 3, name: "Basics of Neurosurgery" },
    ];
  
    return (
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-xl font-bold mb-4">Courses Completed</h2>
        <ul className="list-disc pl-6">
          {completedCourses.map((course) => (
            <li key={course.id} className="text-gray-700">
              {course.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  