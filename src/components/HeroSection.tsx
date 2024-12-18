export default function HeroSection() {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-gray-50">
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-snug">
            Learn Surgery the modern way with <span className="bg-green-300 px-2 rounded">LOGO</span>
          </h1>
          <p className="text-gray-600">
            Discover top-notch courses designed for aspiring professionals.
          </p>
          <div className="space-x-4">
            <button className="bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500 transition">
              Contact Us
            </button>
            <button className="border-2 border-green-400 text-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/doctor-image.png"
            alt="Doctor"
            className="rounded-full shadow-lg w-3/4"
          />
          <div className="absolute top-4 left-4 bg-green-200 px-4 py-1 rounded-full text-sm font-semibold">
            100+ Universities Partner
          </div>
          <div className="absolute bottom-4 right-4 bg-green-200 px-4 py-1 rounded-full text-sm font-semibold">
            25+ Courses
          </div>
        </div>
      </section>
    );
  }
  