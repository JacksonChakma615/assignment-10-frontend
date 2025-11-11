import React from "react";
import img1 from "../../src/assets/img1.jpeg"
import img2 from "../../src/assets/img2.jpeg"
import img3 from "../../src/assets/img3.jpeg"
const FeaturedGames = () => {
  return (
    <div className="px-4 py-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Featured Games</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="max-w-xs p-4 rounded-lg bg-gray-800 shadow-lg">
          <img
            src={img1}
            alt="The Witcher 3: Wild Hunt"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">The Witcher 3: Wild Hunt</h3>
          <p className="text-sm text-gray-400">
            Embark on an epic journey with Geralt of Rivia in this open-world RPG. Encounter mythical creatures, magic, and political intrigue in a world that reacts to your choices.
          </p>

        </div>
        <div className="max-w-xs p-4 rounded-lg bg-gray-800 shadow-lg">
          <img
             src={img2}
            alt="Cyberpunk 2077"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Cyberpunk 2077</h3>
          <p className="text-sm text-gray-400">
            Dive into the dystopian world of Night City in this action RPG. Customize your character, take on dangerous jobs, and explore a neon-lit city filled with secrets.
          </p>
       
        </div>
        <div className="max-w-xs p-4 rounded-lg bg-gray-800 shadow-lg">
          <img
              src={img3}
            alt="Red Dead Redemption 2"
            className="object-cover w-full h-48 mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold mb-2">Red Dead Redemption 2</h3>
          <p className="text-sm text-gray-400">
            Experience the wild west like never before in this story-driven open-world game. Play as Arthur Morgan, an outlaw trying to survive in a world that’s rapidly changing.
          </p>
   
        </div>
      </div>
    </div>
  );
};

export default FeaturedGames;
