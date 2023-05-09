import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import Projects from "@/components/section/projects";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const Kindergaten = () => {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className={`interacionist-partner flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="hero.jpg" alt="" />
          </div>
          <div className="article">
            <div className="title">
              Método de Ensino
              <span className="highlighted">Sócio Interacionista</span>
            </div>
            <div className="content">
              <div className="image">
                <Image
                  src="/socio-interaciosta-1.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <Image
                  src="/socio-interaciosta-2.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
              </div>
              <div className="text">
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text">
                  Praesent a est a sapien dapibus iaculis id in ipsum. Ut
                  facilisis id elit et venenatis. Etiam eget viverra sem. Nullam
                  consectetur euismod leo eget gravida. Sed in imperdiet velit.
                  Aenean dictum dapibus fringilla.
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales,
                </p>
                <p className="article-text mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  augue dui, vestibulum ac semper eget, facilisis a neque.
                  Integer sollicitudin nisi nibh, non facilisis metus sodales a.
                  Aenean sed augue ultricies, maximus velit sodales, lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nam
                </p>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <OurHistory />
        <OpenEnrollment />
        <Partners />
        <Footer />
      </div>
    </main>
  );
};

export default Kindergaten;
