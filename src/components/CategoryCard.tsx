type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function CategoryCard({ title, description, image }: CategoryCardProps) {
  return (
    <div className="p-6 rounded-lg shadow-md bg-hospitalBlue text-white flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm md:text-base text-gray-100">{description}</p>
    </div>
  );
}
