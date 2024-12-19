import Link from "next/link";
import CategoryCard from "../../components/CategoryCard";
import { categories } from "../../data/categories";

export default function CategoriesPage() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              <CategoryCard
                title={category.title}
                description={category.description}
                image={category.image}
              />
            </Link>
          ))
        ) : (
          <p className="text-center">No categories available.</p>
        )}
      </div>
    </section>
  );
}
