import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewCard from "../Components/ReviewCard";
import { MdOutlineSort } from "react-icons/md";

const AllProperties = () => {
  const data = useLoaderData();
  const [reviews, setreviews] = useState(data);
  const [sort, setSort] = useState();
  console.log(data);

  const handleSortData = (sortType) => {
    setSort(sortType);
    if (sortType === "publish year") {
      const sortedYearList = [...reviews].sort((a, b) => b.year - a.year);
      setreviews(sortedYearList);
    }
    if (sortType === "ratings") {
      const sortedRatingsList = [...reviews].sort(
        (a, b) => b.rating - a.rating
      );
      setreviews(sortedRatingsList);
    }
  };

  const handleCategory = (categoryData) => {
    const filteringData = data.filter((f) => f.genres == categoryData);
    setreviews(filteringData);
  };

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <div className="dropdown dropdown-bottom">
          <div tabIndex={0} role="button" className="btn text-3xl m-1">
            <MdOutlineSort />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleCategory("action")}>
              <a>Action</a>
            </li>
            <li onClick={() => handleCategory("adventure")}>
              <a>Adventure</a>
            </li>
            <li onClick={() => handleCategory("sport")}>
              <a>Sport</a>
            </li>
            <li onClick={() => handleCategory("rpg")}>
              <a>RPG</a>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 py-3 px-6 bg-[#D12F42] text-white font-bold"
          >
            {sort ? ` Sort by ${sort}` : "Sort By "}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handleSortData("publish year")}>
              <a>Year</a>
            </li>
            <li onClick={() => handleSortData("ratings")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto py-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
