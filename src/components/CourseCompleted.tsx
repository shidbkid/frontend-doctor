export default function CourseCompleted() {
  const completedCourses = [
    { id: 1, name: "Introduction to Robotics" },
    { id: 2, name: "Advanced Cardiothoracic Techniques" },
    { id: 3, name: "Basics of Neurosurgery" },
  ];

  return (
    <div className=" p-6 shadow-lg rounded-lg text-black">
      <h2 className="text-2xl font-bold mb-6 text-center">Courses Completed</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white text-hospitalBlue p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center text-center"
          >
            <p className="font-semibold">{course.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
