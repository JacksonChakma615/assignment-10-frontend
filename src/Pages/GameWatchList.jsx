import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";

const GameWatchList = () => {
  const { user } = useContext(AuthContex);
  const [ratings, setRatings] = useState([]);

  // Fetch user ratings
  const fetchRatings = () => {
    if (user?.email) {
      fetch(
        `https://assignment-10-lac-ten.vercel.app/myRating?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setRatings(data));
    }
  };

  useEffect(() => {
    fetchRatings();

    const handleUpdate = () => fetchRatings();
    window.addEventListener("ratingUpdated", handleUpdate);

    return () => window.removeEventListener("ratingUpdated", handleUpdate);
  }, [user]);

  return (
    <div className="mt-20 px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">My Ratings & Reviews</h2>
      {ratings.length === 0 ? (
        <p className="text-center text-gray-400">No ratings or reviews yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ratings.map((review) => (
            <div
              key={review._id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col gap-3 transition-transform transform hover:scale-105 duration-200">
              <img
                src={review.image}
                alt={review.propertyName}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{review.propertyName}</h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  Reviewed by:{" "}
                  <span className="font-medium">{review.email}</span>
                </p>

                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < review.rating ? "text-orange-500" : "text-gray-300"
                      }`}>
                      ★
                    </span>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    ({review.rating}/5)
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-200">
                  {review.reviewText}
                </p>
                <p className="text-gray-400 text-sm">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameWatchList;
