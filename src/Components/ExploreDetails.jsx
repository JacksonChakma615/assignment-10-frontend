import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../Router/AuthProvider";
const ExploreDetails = () => {
  const { user } = useContext(AuthContex);

  const review = useLoaderData();

  const handleAddWishList = (review) => {
    fetch("http://localhost:5000/myRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: review.name,
        description: review.description,
        photo: review.photo,
        rating: review.rating,
        email: user.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Added to Wishlist Successfully!");
        } else {
          toast.error("Failed to add to Wishlist. Please try again.");
        }
      })
      .catch((error) => {
        // console.error(error);
        toast.error("An error occurred. Please try again.");
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center py-4">Review Details</h2>
        <div className="flex flex-col lg:flex-row gap-6 p-6 bg-base-200 rounded-xl shadow-xl md:w-10/12 mx-auto  items-center">
          <img className="md:w-96 rounded-xl h-96" src={review.photo} />
          <div className="space-y-2">
            <h4>
              <span className="text-xl font-semibold">
                Review Description:{" "}
              </span>{" "}
              {review.description}
            </h4>

            <h4>
              <span className="font-semibold"> Name : </span> {review.name}
            </h4>
            <h4>
              <span className=" font-semibold">Reviewer Email: </span>{" "}
              {review.email}
            </h4>
            <div className="rating flex items-center">
              <div className="flex text-orange-500">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <p className="ml-4">
                <span className="font-semibold">Rating: </span>
                {review.rating}/10
              </p>
            </div>

            <br />
            <div className="flex gap-6">
              <button
                onClick={() => handleAddWishList(review)}
                className="btn rounded-full px-4 text-white bg-[#9538E2]">
                Add to WatchList
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDetails;
