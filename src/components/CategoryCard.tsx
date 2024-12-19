type CategoryCardProps = {
    title: string;
    description: string;
    image: string;
  };
  
  export default function CategoryCard({ title, description, image }: CategoryCardProps) {
    return (
      <div className="p-6 rounded-lg shadow-lg bg-white flex flex-col items-center text-center">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  