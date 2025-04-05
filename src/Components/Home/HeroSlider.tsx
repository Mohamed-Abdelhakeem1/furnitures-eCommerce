// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tslides } from "../../Types/Types";

const HeroSlider = () => {
  const [slides, setSlides] = useState<Tslides[]>([]);
  const getSlides = async () => {
    try {
      const res = await fetch("/src/assets/Hero_Slider/slider.json");
      const slidesData = await res.json();
      setSlides(slidesData.heroSlider);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSlides();
  }, []);
  return (
    <>
      {" "}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.length < 1 ? (
          <>
            <SwiperSlide>Loading Slides</SwiperSlide>
            <SwiperSlide>Loading Slides</SwiperSlide>
          </>
        ) : (
          slides.map((slide: Tslides) => (
            <SwiperSlide className="min-h-[80vh]" key={slide.id}>
              <div className="abs-center  w-full">
                <h2 className=" text-slate-900 text-2xl sm:text-4xl lg:text-5xl font-bold py-2 sm:py-4 [text-shadow:0px_0px_5px_#fff]">
                  {slide.title}
                </h2>
                <p className="text-blue-900 italic text-sm sm:text-lg">{slide.subtitle}</p>
                <Link
                  to="/shop"
                  className="block w-fit mx-auto px-4 py-2 bg-blue-900 hover:bg-blue-700 transition-all duration-300 mt-3 text-sm sm:text-lg text-white rounded-lg cursor-pointer"
                >
                  {slide.buttonText}
                </Link>
              </div>
              <img
                className="min-h-[80vh]"
                src={slide.image}
                alt={slide.subtitle}
              ></img>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default HeroSlider;
