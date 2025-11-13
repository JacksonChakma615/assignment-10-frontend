import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import banner from "../assets/banner.avif";
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

  const handleUpdateProperty = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedProperty = {
      propertyName: form.propertyName.value,
      description: form.description.value,
      category: form.category.value,
      price: Number(form.price.value),
      location: form.location.value,
      image: form.image.value,
      userEmail: user?.email || userEmail,
      userName: user?.displayName || userName,
    };

    try {
      const response = await fetch(
        `https://assignment-10-lac-ten.vercel.app/allProperties/${_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProperty),
        }
      );

      const data = await response.json();

      if (response.ok && (data.modifiedCount > 0 || data.matchedCount > 0)) {
        Swal.fire({
          title: "Success!",
          text: "Property updated successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else if (response.ok && data.matchedCount === 0) {
        Swal.fire("Error!", "Property not found or no changes made.", "error");
      } else {
        Swal.fire("Error!", data.error || "Something went wrong!", "error");
      }
    } catch (err) {
      Swal.fire("Error!", "Server error. Try again later.", "error");
      console.error(err);
    }
  };

  return (
    <div className="mt-20">
      <div
        className="bg-cover bg-center p-4 sm:p-8 md:p-12 lg:p-24"
        style={{ backgroundImage: `url(${banner})` }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center my-5 text-white">
          Update Property
        </h2>

        <div className="backdrop-blur-sm rounded-lg bg-gray-800 bg-opacity-50 p-6 sm:p-8 md:p-12">
          <form
            onSubmit={handleUpdateProperty}
            className="w-full max-w-screen-lg mx-auto space-y-6">
            {/* Property Name & Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">Property Name</label>
                <input
                  type="text"
                  name="propertyName"
                  defaultValue={propertyName}
                  placeholder="Enter property name"
                  className="bg-gray-900 text-gray-200 w-full p-3 rounded"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">Image URL</label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Enter image URL"
                  className="bg-gray-900 text-gray-200 w-full p-3 rounded"
                  required
                />
              </div>
            </div>

            {/* Category & Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">Category</label>
                <select
                  name="category"
                  defaultValue={category}
                  className="bg-gray-900 text-gray-200 w-full p-3 rounded"
                  required>
                  <option value="">Select Category</option>
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter price"
                  className="bg-gray-900 text-gray-200 w-full p-3 rounded"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                defaultValue={location}
                placeholder="Enter location"
                className="bg-gray-900 text-gray-200 w-full p-3 rounded"
                required
              />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                rows="5"
                placeholder="Enter description"
                className="bg-gray-900 text-gray-200 w-full p-3 rounded"
                required></textarea>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={user?.displayName || userName || ""}
                readOnly
                className="bg-gray-700 text-gray-300 w-full p-3 rounded"
              />
              <input
                type="email"
                value={user?.email || userEmail || ""}
                readOnly
                className="bg-gray-700 text-gray-300 w-full p-3 rounded"
              />
            </div>

            {/* Submit */}
            <input
              type="submit"
              value="Update Property"
              className="bg-[#D12F42] text-white w-full px-6 py-3 rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatedReview;
