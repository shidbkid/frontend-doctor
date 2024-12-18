export default function Recommendations() {
  return (
    <section className="p-10">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Recommendations
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-white shadow-lg ${
              index % 3 === 0
                ? "bg-blue-900" // Blue for every 3rd box
                : index % 3 === 1
                ? "bg-red-500" // Red for 2nd box
                : "bg-orange-500" // Orange for 3rd box
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">
              Lorem Ipsum
            </h3>
            <p className="text-white text-sm opacity-90">
              Discover the best practices and insights from top instructors
              to enhance your learning experience.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
