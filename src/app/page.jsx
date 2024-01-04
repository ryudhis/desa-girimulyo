import Image from "next/image";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header />
      <Carousel />
      <Profile />
      <Gallery />
      <Maps />
      <Footer />
    </main>
  );
}
