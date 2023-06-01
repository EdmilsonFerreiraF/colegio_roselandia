import { baseURL } from "@/constants/baseURL";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const poppins = Poppins({ weight: ["300"], subsets: ["devanagari"] });

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = ({ images }: any) => {
  return (
    <Swiper
      autoplay={{
        delay: 3500,
        pauseOnMouseEnter: true,
      }}
      effect="fade"
      fadeEffect={{
        crossFade: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((images: any) => (
        <SwiperSlide key={images}>
          <Image
            width="100"
            height="100"
            src={`${baseURL}/assets/${images.imagem}`}
            alt=""
          />
          {images.hero_legenda && (
            <div className={`legend ${poppins.className}`}>
              {images.hero_legenda?.texto}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
