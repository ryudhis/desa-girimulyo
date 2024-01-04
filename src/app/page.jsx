"use client";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      {/* <Hero /> */}
      <Profile />
      <Gallery />
      <Maps />
      <Footer />
    </main>
  );
}
