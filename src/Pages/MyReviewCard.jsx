import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../Router/AuthProvider";

const MyProperties = () => {
  const { user } = useContext(AuthContex);
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch logged-in user's properties
  const fetchMyProperties = async () => {
    if (!user?.email) return;
    try {
      const res = await fetch(`http://localhost:5000/myProperties?email=${user.email}`);
      const data = await res.json();
      setMyProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyProperties();
  }, [user]);

  // Delete property
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This property will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myProperties/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Property has been deleted.", "success");
            setMyProperties(myProperties.filter((prop) => prop._id !== _id));
          })
          .catch(() => Swal.fire("Error!", "Failed to delete property.", "error"));
      }
    });
  };

  if (loading) {
    return <p className="text-center mt-10">Loading your properties...</p>;
  }

  if (myProperties.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500 dark:text-gray-400">
        You have not added any properties yet.
      </p>
    );
  }

  return (
    <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {myProperties.map((prop) => (
        <div
          key={prop._id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col gap-3 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
        >
          {/* Image */}
          <img
            src={prop.image}
            alt={prop.propertyName}
            className="w-full h-48 object-cover rounded-md"
          />

          {/* Details */}
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {prop.propertyName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Category: <span className="font-medium">{prop.category}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Price: <span className="font-medium">${prop.price}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Location: <span className="font-medium">{prop.location}</span>
            </p>
            <p className="text-sm text-gray-400">
              Posted: {new Date(prop.date).toLocaleDateString()}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-2 flex flex-wrap gap-2">
            <Link to={`/updateProperty/${prop._id}`}>
              <button className="btn btn-sm bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-1 transition-colors duration-200">
                Update
              </button>
            </Link>

            <button
              onClick={() => handleDelete(prop._id)}
              className="btn btn-sm bg-red-600 hover:bg-red-700 text-white rounded px-3 py-1 transition-colors duration-200"
            >
              Delete
            </button>

            <Link to={`/exploreDetails/${prop._id}`}>
              <button className="btn btn-sm bg-green-600 hover:bg-green-700 text-white rounded px-3 py-1 transition-colors duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProperties;
