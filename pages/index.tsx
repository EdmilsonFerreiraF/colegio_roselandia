import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import EducationLevel from "@/components/section/educationLevel";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
const inter = Inter({ subsets: ["latin"] });

import axios from "axios";
import { Navigation, Pagination } from "swiper";

// import required modules

export default function Home() {
  const fetcher = (res: any) => fetch(res).then((res) => res.json());
  const [hero, setHero] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const getDatabaseToken = async () => {
      const res = await axios
        .post("http://localhost:8055/auth/login", {
          email: "edmilsonf.o3@gmail.com",
          password: "5Z`,F\\2Q[K,q$^UK",
        })
        .then((res: any) => {
          console.log("res", res);

          setToken(res.data.data.access_token);
        });
      return res;
    };

    const token = getDatabaseToken();
  }, []);

  useEffect(() => {
    console.log("token", token);
    if (token) localStorage.setItem("token", token as any);

    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");

      const getImages = async () => {
        const res = await axios
          .get(
            "http://localhost:8055/items/paginas?fields=hero.carrossel.item:carrossel_imagem.imagem",
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((res: any) => {
            console.log("res", res);

            return res.data;
          });
        console.log("res", res);

        return res;
      };

      console.log("getImages()", getImages());
    }
  }, [token]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="index">
        <Header />
        <div className="main">
          <div className="hero">
            {/* <Image width="100" height="100"
              src={`http://localhost:8055/assets/${data.data[0].blocks[0].item.image}`}
              src="hero.png"
              alt=""
            /> */}
            <Swiper
              autoplay
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img width="100" height="100" src="hero.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100" height="100" src="hero.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img width="100" height="100" src="hero.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <EducationLevel />
          <div className="interacionist-partner">
            <Image width="100" height="100" src="section-6.jpg" alt="" />
          </div>
          <Projects />
          <OurHistory />
          <OpenEnrollment />
          <Partners />
          <Footer />
        </div>
      </div>
    </main>
  );
}
