import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Problem from "./components/Problem";
import Product from "./components/Product";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Technology from "./components/Technology";
import Specs from "./components/Specs";
import UseCases from "./components/UseCases";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Product />
        <HowItWorks />
        <Features />
        <Technology />
        <Specs />
        <UseCases />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
