import Navbar from "@/components/Layout/Navbar";
import SliderNewArrival from "@/components/Sliders/SliderNewArrival";
import CardHero from "@/components/Cards/CardHero";
import SliderMain from "@/components/Sliders/SliderMain";
import CategoriesForMen from "@/components/Sections/CategoriesForMen";
import Footer from "@/components/Layout/Footer";
import Oferts from "@/components/Sections/Oferts";
import Feedback from "@/components/Sections/Feedback";
import CategoriesForWomen from "@/components/Sections/CategoriesForWomen";

export default function Home() {
  return (
    <>
      <Navbar />
      <SliderMain />
      <SliderNewArrival></SliderNewArrival>
      <CardHero />
      <CategoriesForMen />
      <Oferts />
      <CategoriesForWomen />
      <Feedback />
      
      <Footer />
    </>
  );
}
