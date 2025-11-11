import { useContext } from "react";
import Swal from "sweetalert2";
import banner from "../assets/AddMy.jpeg";
import { AuthContex } from "../Router/AuthProvider";

const AddProperties = () => {
  const { user } = useContext(AuthContex);

  const handleAddProperty = (e) => {
    e.preventDefault();

    const form = e.target;
    const propertyName = form.propertyName.value;
    const description = form.description.value;
    const category = form.category.value;
    const price = form.price.value;
    const location = form.location.value;
    const image = form.image.value;

    // ✅ Corrected user info
    const userEmail = user?.email || "";
    const userName = user?.displayName || "";

    const newProperty = {
      propertyName,
      description,
      category,
      price,
      location,
      image,
      userEmail,
      userName,
    };

    // ✅ Send data to backend
    fetch("http://localhost:5000/allProperties", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        // ✅ Check for insert success (MongoDB returns insertedId)
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Property Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div className="mt-20">
      <div
        className="bg-cover bg-center p-4 sm:p-8 md:p-12 lg:p-24"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center my-5 text-white">
          Add Your Property
        </h2>
        <p className="text-center text-sm md:text-base lg:text-lg md:w-8/12 lg:w-8/12 mx-auto mb-10 text-white">
          The Property Listing Form in HomeNest allows property owners and
          agents to easily submit property details. Include your title, price,
          location, category, description, and images to attract potential
          buyers or renters efficiently.
        </p>

        <div className="backdrop-blur-sm rounded-lg bg-gray-800 bg-opacity-50 p-6 sm:p-8 md:p-12">
          <form
            onSubmit={handleAddProperty}
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
                  placeholder="Enter property name"
                  className="bg-gray-900 text-gray-200 placeholder-gray-400 w-full p-3 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">
                    Image Link (Use imgbb)
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
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
                  value={user?.displayName || ""}
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
                  value={user?.email || ""}
                  readOnly
                  className="bg-gray-700 text-gray-300 w-full p-3 rounded"
                />
              </div>
            </div>

            {/* Submit Button */}
            <input
              type="submit"
              value="Add Property"
              className="btn bg-[#D12F42] hover:bg-gray-900 text-white w-full px-6 py-3 rounded-lg my-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProperties;
