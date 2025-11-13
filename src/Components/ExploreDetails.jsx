import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../Router/AuthProvider";

const ExploreDetails = () => {
  const { user } = useContext(AuthContex);
  const property = useLoaderData(); // loader থেকে JSON data

  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState("");
  const [loading, setLoading] = useState(false);

  // Submit rating
  const handleAddRating = async () => {
    if (!userRating) {
      toast.error("Please select a rating before submitting!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://assignment-10-lac-ten.vercel.app/myRating",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            propertyId: property?._id,
            name: property?.propertyName,
            description: property?.description,
            image: property?.image,
            rating: userRating,
            reviewText: userReview,
            email: user?.email,
          }),
        }
      );

      const data = await res.json();

      if (res.status === 400) {
        toast.error(data.message); // Already rated
      } else if (data.insertedId) {
        toast.success("Rating submitted successfully!");
        setUserRating(0);
        setUserReview("");
        window.dispatchEvent(new Event("ratingUpdated")); // trigger GameWatchList refresh
      } else {
        toast.error("Failed to submit rating.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!property)
    return <p className="text-center mt-10">Loading property details...</p>;

  return (
    <div className="p-6 md:w-10/12 mx-auto">
      <h2 className="text-3xl font-bold text-center py-4">
        {property?.propertyName}
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 bg-base-200 rounded-xl shadow-xl p-6 items-start">
        <img
          className="md:w-96 md:h-96 w-full h-72 rounded-xl object-cover"
          src={property?.image}
          alt={property?.propertyName}
        />
        <div className="flex-1 space-y-3">
          <h4>
            <span className="font-semibold">Description: </span>
            {property?.description}
          </h4>
          <h4>
            <span className="font-semibold">Price: </span>${property?.price}
          </h4>
          <h4>
            <span className="font-semibold">Category: </span>
            {property?.category}
          </h4>
          <h4>
            <span className="font-semibold">Location: </span>
            {property?.location}
          </h4>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-bold mb-4">Submit Your Rating</h3>

        <div className="flex items-center gap-2 mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setUserRating(i + 1)}
              className={`text-2xl ${
                i < userRating ? "text-orange-500" : "text-gray-300"
              }`}>
              ★
            </button>
          ))}
        </div>

        <textarea
          value={userReview}
          onChange={(e) => setUserReview(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-2"
        />

        <button
          onClick={handleAddRating}
          disabled={loading}
          className={`btn rounded-full px-6 py-2 text-white bg-[#9538E2] ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}>
          {loading ? "Submitting..." : "Submit Review"}
        </button>
      </div>
    </div>
  );
};

export default ExploreDetails;
