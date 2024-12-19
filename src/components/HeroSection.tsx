export default function HeroSection() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen p-6 lg:p-16 mt-20">
      {/* Background Circle */}
      <div className="absolute w-[250px] h-[350px] sm:w-[350px] sm:h-[500px] lg:w-[472px] lg:h-[710px] bg-gradient-to-b from-[#98C483] to-transparent rounded-full -z-10 top-1/2 transform -translate-y-1/2 lg:right-1/4 hidden sm:block"></div>

      {/* Left Content */}
      <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 z-10 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-black">
          Learn Surgery the <br className="hidden lg:block" /> modern way with{" "}
          <span className="inline-block bg-[#C0F1BF] px-4 py-2 rounded-full shadow-lg">
            LOGO
          </span>
        </h1>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button className="bg-[#98C483] text-white font-semibold px-6 py-2 rounded-full shadow-lg w-full sm:w-auto">
            Contact Us
          </button>
          <button className="border-2 border-[#98C483] text-[#98C483] font-semibold px-6 py-2 rounded-full shadow-lg w-full sm:w-auto">
            Learn
          </button>
        </div>

        {/* Horizontal Badges */}
        <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="bg-[#C0F1BF] text-black font-semibold p-4 rounded-full shadow-lg flex items-center text-xs sm:text-sm lg:text-base">
            <span className="mr-2">📅</span> 100+ Universities Partner
          </div>
          <div className="bg-[#C0F1BF] text-black font-semibold p-4 rounded-full shadow-lg flex items-center text-xs sm:text-sm lg:text-base">
            <span className="mr-2">👥</span> 1400+ Students
          </div>
          <div className="bg-[#C0F1BF] text-black font-semibold p-4 rounded-full shadow-lg flex items-center text-xs sm:text-sm lg:text-base">
            <span className="mr-2">📘</span> 25+ Courses
          </div>
        </div>
      </div>

      {/* Right Content with Profile */}
      <div className="relative flex items-center justify-center lg:w-1/2 mt-10 lg:mt-0 hidden sm:flex">
        <div className="relative rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[552px] lg:h-[605px] overflow-hidden z-10">
          <img
            src="/path-to-your-image.png"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
