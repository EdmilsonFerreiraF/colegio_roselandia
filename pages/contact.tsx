import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactForm from "@/components/section/contactForm";
import OpenEnrollment from "@/components/section/openEnrollment";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handlePageClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <main
      className={`schedule-visit flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="contato.jpg" alt="" />
          </div>
          <ContactForm />
          <OpenEnrollment />
          <Footer />
        </div>
      </div>
    </main>
  );
}
