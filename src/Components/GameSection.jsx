import img from "../../src/assets/home1.png'.avif"; // Replace with actual image path

const GameSection = () => {
  return (
    <div className="w-11/12 mx-auto px-4 py-10">
      <div className="md:flex md:items-center md:space-x-8 space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <img
            src={img}
            alt="Gaming Experience"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
           Find Your Dream Home Today
          </h1>
          <p className="text-lg mb-6">
            Step into a world where finding your perfect home is easier than
            ever. Explore thousands of verified property listings, from cozy
            apartments to luxurious villas — all tailored to match your
            lifestyle and budget. With HomeNest, you can discover detailed
            property insights, view high-quality images, and connect directly
            with trusted property owners or agents. Whether you’re buying,
            renting, or just exploring — your dream home is just a few clicks
            away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
