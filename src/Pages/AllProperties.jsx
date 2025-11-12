import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";
import { MdOutlineSort } from "react-icons/md";

const AllProperties = () => {
  const data = useLoaderData();
  const [reviews, setreviews] = useState(data);

  console.log(data);


  return (
    <div className="mt-20">


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
