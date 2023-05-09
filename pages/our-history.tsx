import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Documentary from "@/components/section/documentary";
import OpenEnrollment from "@/components/section/openEnrollment";
import OurHistory from "@/components/section/ourHistory";
import Partners from "@/components/section/partners";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className={`our-history flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="hero.jpg" alt="" />
          </div>
          <OurHistory />
          <Documentary />
          <OpenEnrollment />
          <Partners />
          <Footer />
        </div>
      </div>
    </main>
  );
}
