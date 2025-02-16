import recommendations from "../data/recommendations";
import RecommendationCard from "./RecommendationCard";

export default function Recommendations() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-100 mt-4 md:mt-5 sm:mt-6 lg:mt-6">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
        Recommendations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {recommendations.map((item) => (
          <RecommendationCard
            key={item.id}
            title={item.title}
            description={item.description}
         
          />
        ))}
      </div>

    </section>
  );
}
