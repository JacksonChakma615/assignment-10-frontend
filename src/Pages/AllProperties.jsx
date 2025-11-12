import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";

const AllProperties = () => {
  const data = useLoaderData();
  const [reviews, setReviews] = useState(data);

  return (
    <div className="mt-20 bg-gray-100 min-h-screen py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
        All Properties
      </h2>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          No properties available at the moment.
        </p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-11/12 mx-auto">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProperties;
