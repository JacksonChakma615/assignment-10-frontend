import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import FeaturedGames from "../Components/FeaturedGames";
import HomeCard from "../Components/HomeCard";
import TypeWriter from "../Components/TypeWriter";
import GameSection from "../Components/GameSection";

const Home = () => {
  const reviews = useLoaderData();

  const sortedReviews = [...reviews]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <div>
      <div>
        {/* banner */}
        <Banner></Banner>
      </div>

      <div>
        <TypeWriter></TypeWriter>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-11/12 mx-auto mt-10 py-5">
        {sortedReviews.map((review) => (
          <HomeCard key={review._id} review={review}></HomeCard>
        ))}
      </div>

      <GameSection></GameSection>
      <FeaturedGames></FeaturedGames>
    </div>
  );
};

export default Home;
