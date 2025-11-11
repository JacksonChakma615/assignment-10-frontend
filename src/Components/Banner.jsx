import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000, // Adjusted for slower autoplay
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <div
              className="hero w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner1})`,
              }}>
              <div className="bg-opacity-40 hero-overlay"></div>
              <div className="hero-content text-white flex flex-col justify-center items-start pl-10">
                <div className="max-w-lg">
                  <h1 className="mb-4 text-4xl font-extrabold leading-tight">
                    Discover Modern Living Spaces
                  </h1>
                  <p className="mb-6 text-lg">
                    Explore modern real estate listings with stunning visuals
                    and seamless navigation. Find your perfect home or list your
                    property with ease.
                  </p>
                  <button className="btn bg-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner2})`,
              }}>
              <div className="bg-opacity-40 hero-overlay"></div>
              <div className="hero-content text-white flex flex-col justify-center items-start pl-10">
                <div className="max-w-lg">
                  <h1 className="mb-4 text-4xl font-extrabold leading-tight">
                    Find Your Dream Home Today
                  </h1>
                  <p className="mb-6 text-lg">
                    Grow your home-based business with smart tools, real-time
                    insights, and seamless management. Take your business to the
                    next level from the comfort of your home.
                  </p>
                  <button className="btn bg-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${banner3})`,
              }}>
              <div className="bg-opacity-50 hero-overlay"></div>
              <div className="hero-content text-white flex flex-col justify-center items-start pl-10">
                <div className="max-w-lg">
                  <h1 className="mb-4 text-4xl font-extrabold leading-tight">
                   List, Explore, and Move with Ease
                  </h1>
                  <p className="mb-6 text-lg">
                    Discover beautiful homes and real estate listings with
                    stunning visuals and easy navigation. Find your dream home
                    or list your property effortlessly.
                  </p>
                  <button className="btn bg-gray-900 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
