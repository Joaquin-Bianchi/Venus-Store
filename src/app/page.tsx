import CardHero from "../components/cards/CardHero";
import Footer from "../components/footer/Footer";
import CategoriesForMen from "../components/sections/CategoriesForMen";
import CategoriesForWomen from "../components/sections/CategoriesForWomen";
import Newsletter from "../components/footer/Newsletter";
import Ofertas from "../components/sections/Oferts";
import SliderMain from "../components/sliders/SliderMain";
import SliderNewArrival from "../components/sliders/SliderNewArrival";

export default function Home() {
  return (
    <>
      <SliderMain />
      <SliderNewArrival></SliderNewArrival>
      <CardHero />
      <CategoriesForMen />
      <Ofertas />
      <CategoriesForWomen />
      <Newsletter />
      <Footer />
    </>
  );
}
