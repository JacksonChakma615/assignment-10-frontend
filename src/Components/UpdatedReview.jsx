import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import banner from "../assets/AddMy.jpeg";
import { AuthContex } from "../Router/AuthProvider";

const UpdatedReview = () => {
  const { user } = useContext(AuthContex);
  const review = useLoaderData() || {};
  const {
    _id,
    propertyName,
    description,
    category,
    price,
    location,
    image,
    userEmail,
    userName,
  } = review;

  const handleUpdateProperty = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedProperty = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: form.price.value,
      location: form.location.value,
      image: form.image.value,
      userEmail: user?.email || userEmail,
      userName: user?.displayName || userName,
    };

    fetch(`http://localhost:5000/myProperties/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Property updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch(() =>
        Swal.fire("Error!", "Something went wrong. Try again.", "error")
      );
  };

  return (
    <div className="mt-20">
      <div
        className="bg-cover bg-center p-4 sm:p-8 md:p-12 lg:p-24"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center my-5 text-white">
          Update Property
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg md:w-8/12 lg:w-8/12 mx-auto mb-10 text-white">
          Update the property details below. Make sure the information is accurate
          and up-to-date.
        </p>

        <div className="backdrop-blur-sm rounded-lg bg-gray-800 bg-opacity-50 p-6 sm:p-8 md:p-12">
          <form
            onSubmit={handleUpdateProperty}
            className="w-full max-w-screen-lg mx-auto space-y-6"
          >
            {/* Property Name & Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Property Name
                  </span>
                </label>
                <input
                  type="text"
                  name="propertyName"
                  defaultValue={propertyName}
                  placeholder="Enter property name"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Image Link
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Enter image URL"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Category & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Category
                  </span>
                </label>
                <select
                  name="category"
                  defaultValue={category}
                  className="bg-gray-900 text-gray-200 w-full p-3 rounded focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Price ($)
                  </span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter price"
                  className="bg-gray-900 text-gray-200 w-full p-3 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-white">
                  Location
                </span>
              </label>
              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="Enter city, area, or address"
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-white">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                defaultValue={description}
                rows="5"
                placeholder="Write about the property..."
                className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:ring-2 focus:ring-green-500"
                required
              ></textarea>
            </div>

            {/* User Info (Read-only) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    User Name
                  </span>
                </label>
                <input
                  type="text"
                  value={user?.displayName || userName || ""}
                  readOnly
                  className="bg-gray-700 text-gray-300 w-full p-3 rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    User Email
                  </span>
                </label>
                <input
                  type="email"
                  value={user?.email || userEmail || ""}
                  readOnly
                  className="bg-gray-700 text-gray-300 w-full p-3 rounded"
                />
              </div>
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="Update Property"
              className="btn bg-[#D12F42] hover:bg-gray-900 text-white w-full px-6 py-3 rounded-lg my-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatedReview;
