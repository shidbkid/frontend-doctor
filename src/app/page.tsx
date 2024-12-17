"use client"; // Marks this as a Client Component

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <nav className="space-x-6">
            <a href="#" className="hover:text-green-500">About Us</a>
            <a href="#" className="hover:text-green-500">Courses</a>
            <a href="#" className="hover:text-green-500">Categories</a>
            <a href="#" className="hover:text-green-500">Courses</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-10 py-16 bg-gray-50">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-extrabold leading-snug">
            Learn Surgery the modern way with <span className="bg-green-200 px-2 py-1 rounded-lg">LOGO</span>
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor amet, consectetur adipiscing elit. Viverra vel morbi
            curabitur consectetur dignissim.
          </p>
          <div className="space-x-4">
            <button className="bg-green-300 px-6 py-2 rounded-full font-bold hover:bg-green-400 transition">
              Contact Us
            </button>
            <button className="border-2 border-green-400 px-6 py-2 rounded-full font-bold hover:bg-green-400 hover:text-white transition">
              Learn
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/300x400" // Replace with actual image
            alt="Surgeon"
            className="rounded-lg shadow-lg"
          />
          {/* Badges */}
          <div className="absolute top-4 left-4 bg-green-200 px-4 py-2 rounded-full shadow-md">
            <p className="text-sm font-bold">100+ Universities Partner</p>
          </div>
          <div className="absolute bottom-4 right-4 bg-green-200 px-4 py-2 rounded-full shadow-md">
            <p className="text-sm font-bold">25+ Courses</p>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="p-10">
        <h2 className="text-3xl font-bold mb-8">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md text-white ${
                index % 3 === 0
                  ? "bg-red-500"
                  : index % 3 === 1
                  ? "bg-blue-900"
                  : "bg-orange-500"
              }`}
            >
              <h3 className="font-bold text-lg mb-4">Lorem ipsum</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
