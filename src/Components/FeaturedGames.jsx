import React from "react"; 
import img1 from "../../src/assets/img.1.jpg"
import img2 from "../../src/assets/img2.png"
import img3 from "../../src/assets/img3.png"
const FeaturedHomes = () => {
  return (
    <div className="px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        🌟 Featured Homes
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {/* Card 1 */}
        <div className="max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src={img1}
              alt="Dream Home"
              className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Discover Your Dream Home
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Explore beautiful apartments, cozy houses, and luxurious villas
              with stunning visuals. Find the perfect home that matches your
              lifestyle and comfort.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src={img2}
              alt="Modern Homes"
              className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Homes That Match Your Lifestyle
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Browse modern spaces and serene neighborhoods with smart tools.
              Connect with verified owners and make your dream move effortless.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="relative">
            <img
              src={img3}
              alt="Perfect Home"
              className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Your Perfect Home Awaits
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Step into elegant homes and experience luxury living. Discover
              properties that suit every taste, need, and budget with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHomes;
