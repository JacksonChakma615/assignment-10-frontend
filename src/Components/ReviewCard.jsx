import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContex } from "../Router/AuthProvider";

const ReviewCard = ({ review }) => {
  const { user } = useContext(AuthContex);
  const { image, name, description, rating, genres } = review;



  return (
    <div className="flex flex-col max-w-xs p-3 space-y-3 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
      <div className="relative">
        {/* Image with proper cover */}
        <img
          src={image}
          alt="Review"
          className="object-cover w-full h-32 mb-3 rounded-lg dark:bg-gray-500"
        />
      </div>

      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-xs mb-2">{description}</p>

      <div>
        <h3 className="text-xs font-medium">
          <span className="font-semibold">Genres:</span> {genres}
        </h3>
      </div>

      <div className="flex justify-between items-center text-xs mb-2">
        <p>
          <span className="font-semibold">Rating:</span> {rating}/10
        </p>
        <div className="flex text-orange-500">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-regular fa-star"></i>
          <i className="fa-regular fa-star"></i>
        </div>
      </div>

      <div className="">
        <Link to={`/exploreDetails/${review._id}`}>
          <button
            id="my-anchor-element-id"
            className="btn btn-sm rounded-xl px-4 py-1 bg-gray-900 text-white hover:bg-gray-800 transition duration-300 w-full">
            See Details
          </button>
        </Link>
        <Tooltip
          anchorSelect="#my-anchor-element-id"
          content="Click the button to see details"
        />
    
      </div>
    </div>
  );
};

export default ReviewCard;
