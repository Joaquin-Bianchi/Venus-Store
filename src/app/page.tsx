import CardHero from "../components/Cards/CardHero";
import Footer from "../components/Sections/Footer";
import CategoriesForMen from "../components/Sections/CategoriesForMen";
import CategoriesForWomen from "../components/Sections/CategoriesForWomen";
import Feedback from "../components/Sections/Newsletter";
import Ofertas from "../components/Sections/Oferts";
import SliderMain from "../components/Sliders/SliderMain";
import SliderNewArrival from "../components/Sliders/SliderNewArrival";

export default function Home() {
  return (
    <>
      <SliderMain />
      <SliderNewArrival></SliderNewArrival>
      <CardHero />
      <CategoriesForMen />
      <Ofertas />
      <CategoriesForWomen />
      <Feedback />
      <Footer />
    </>
  );
}
