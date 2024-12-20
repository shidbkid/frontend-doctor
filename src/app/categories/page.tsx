import { categories } from "../../data/categories";
import Navbar from "../../components/Navbar";

export default function CategoriesPage() {
  return (
    <div>
      <Navbar />
      <div className="py-16 px-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mt-20 mb-12">Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categories/${category.id}`}
              className="block p-6 rounded-lg shadow-lg bg-white hover:bg-gray-100"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-red-600">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
