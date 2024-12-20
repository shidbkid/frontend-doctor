import recommendations from "../data/recommendations";
import RecommendationCard from "./RecommendationCard";

export default function Recommendations() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Recommendations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((item) => (
          <RecommendationCard
            key={item.id}
            title={item.title}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}
