import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScheduleForm from "@/components/scheduleForm";
import EducationLevel from "@/components/section/educationLevel";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`schedule-visit flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <div className="container index">
        <Header />
        <div className="main">
          <div className="hero">
            <img src="agende-visita.jpg" alt="" />
          </div>
          <ScheduleForm />
          <EducationLevel />
          <Footer />
        </div>
      </div>
    </main>
  );
}
