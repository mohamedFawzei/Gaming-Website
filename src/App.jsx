import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";

export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}
