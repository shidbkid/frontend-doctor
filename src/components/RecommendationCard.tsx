interface RecommendationCardProps {
  title: string;
  description: string;
 
}

export default function RecommendationCard({
  title,
  description,

}: RecommendationCardProps) {
  return (
    <div className={`p-6 rounded-lg shadow-md bg-hospitalBlue text-white`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
