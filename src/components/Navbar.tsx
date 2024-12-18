export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      {/* Search Section */}
      <div className="relative w-[500px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[50px] pl-12 pr-4 rounded-full border-2 border-[#C0F1BF] text-gray-500 text-lg font-semibold focus:outline-none"
        />
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <img
            src="/icons/search-icon.png" // Replace with your actual search icon path
            alt="Search Icon"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        <button className="bg-[#C0F1BF] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-green-400 transition">
          Login
        </button>
        <button className="bg-[#C0F1BF] text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-green-400 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
