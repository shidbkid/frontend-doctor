import React from "react";

// Define the type for the props
interface CourseCardProps {
  title: string;
  description: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, color }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${color} text-black`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;
