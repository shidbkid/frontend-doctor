export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-6 lg:p-16 mb-4 sm:mb-8">
      {/* Left Content */}
      <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 z-10 bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-gray-800">
          Learn Surgery the <br className="hidden lg:block" /> modern way with{" "}
          <span className="inline-block bg-hospitalBlue px-4 py-2 rounded-full shadow-lg">
            LOGO
          </span>
        </h1>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          Join 100+ universities and 1400+ students who are learning surgery through cutting-edge resources and personalized courses.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="bg-hospitalBlue hover:bg-[#5a9fdc] text-white font-semibold px-8 py-3 rounded-full shadow-lg w-full sm:w-auto transition-transform transform hover:scale-105">
            Contact Us
          </button>
          <button className="border-2 border-hospitalBlue text-hospitalBlue hover:bg-hospitalBlue hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg w-full sm:w-auto transition-transform transform hover:scale-105">
            Learn
          </button>
        </div>

        {/* Horizontal Badges */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
          <div className="bg-hospitalBlue text-black font-semibold px-6 py-3 rounded-full shadow-lg flex items-center text-xs sm:text-sm lg:text-base">
            <span className="mr-2">📅</span> 100+ Universities Partner
          </div>
          <div className="bg-hospitalBlue text-black font-semibold px-6 py-3 rounded-full shadow-lg flex items-center text-xs sm:text-sm lg:text-base">
            <span className="mr-2">👥</span> 1400+ Students
          </div>
          <div className="bg-hospitalBlue text-black font-semibold px-6 py-3 rounded-full shadow-lg flex items-center text-xs sm:text-sm lg:text-base">
            <span className="mr-2">📘</span> 25+ Courses
          </div>
        </div>
      </div>

      {/* Right Content with Profile Image */}
      <div className="relative items-center justify-center lg:w-1/2 mt-10 lg:mt-0 flex">
        <div className="relative rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[552px] lg:h-[605px] overflow-hidden z-10 shadow-lg">
          <img
            src="/path-to-your-image.png"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
