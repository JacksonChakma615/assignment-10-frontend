import React from "react"; 
import img1 from "../../src/assets/img.1.jpg"
import img2 from "../../src/assets/img2.png"
import img3 from "../../src/assets/img3.png"

const FeaturedGames = () => {
  return (
    <div className="px-4 py-10 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Featured Homes</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-gradient-to-t from-blue-600 to-gray-800 text-white">
          <img
            src={img1}
            alt="Discover Your Dream Home"
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Discover Your Dream Home</h3>
            <p className="text-sm text-gray-200">
              Explore beautiful apartments, cozy houses, and luxurious villas with detailed listings and high-quality images. Find the perfect home that fits your lifestyle.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-gradient-to-t from-green-600 to-gray-800 text-white">
          <img
            src={img2}
            alt="Homes That Match Your Lifestyle"
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Homes That Match Your Lifestyle</h3>
            <p className="text-sm text-gray-200">
              Browse modern spaces and serene neighborhoods with smart search tools. Connect with verified owners and make your home journey effortless.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs rounded-lg shadow-lg overflow-hidden bg-gradient-to-t from-purple-600 to-gray-800 text-white">
          <img
            src={img3}
            alt="Your Perfect Home Awaits"
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Your Perfect Home Awaits</h3>
            <p className="text-sm text-gray-200">
              Step into elegant homes and unlock the life you’ve always dreamed of. Discover a variety of properties that suit every taste and budget.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedGames;
