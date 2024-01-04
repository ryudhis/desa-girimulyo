import Image from "next/image";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Header />
      <Hero />
      <Profile />
      <Gallery />
      <Maps />
      <Footer />
    </main>
  );
}
