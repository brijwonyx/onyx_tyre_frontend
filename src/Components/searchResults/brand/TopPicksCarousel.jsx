import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import ProductCard from "./ProductCard";

const products = Array.from({ length: 10 });
const slides = [...products, ...products]; // buffer for loop

const TopPicksCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-semibold font-montserrat">
        Top picks from our side
      </h2>
      <p className="text-center text-sm text-black mb-12 font-montserrat">
        Hurry and grab these limited-time offers before the countdown runs out.
      </p>

      {/* Width controlled container */}
      <div className="relative max-w-[1200px] overflow-hidden mx-auto">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          navigation
          loop
          centeredSlides
          grabCursor
          slidesPerView={3}
          spaceBetween={20}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
            scale: 1,
          }}
          breakpoints={{
            0: {
              spaceBetween: 0,
            },
            768: {
              spaceBetween: -60,
            },
            1024: {
              spaceBetween: -80,
            },
          }}
        >
          {slides.map((_, i) => (
            <SwiperSlide key={i}>
              <ProductCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopPicksCarousel;
