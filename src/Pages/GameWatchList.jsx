import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../Router/AuthProvider";

const GameWatchList = () => {
  const { user } = useContext(AuthContex);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myRating?email=${user.email}`)
      .then((req) => req.json())
      .then((data) => {
        setWishlist(data);
      });
  }, [user]);

  return (
    <div className="wishlist-container px-4 py-6 mt-20">
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg text-black dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Image</th>
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">Reviewer</th>
              <th className="px-4 py-2 text-left font-semibold">Rating</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr
                key={item._id}
                className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="px-4 py-2">
                  <img
                    className="w-16 h-16 object-cover rounded"
                    src={item.photo}
                    alt={item.name}
                  />
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2 text-black">{item.rating}/10</td>
                <td className="px-4 py-2">{item.genres}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameWatchList;
