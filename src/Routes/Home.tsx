import Features from "../Components/Home/Features";
import Categories from "../Components/Home/Categories";
import HeroSlider from "../Components/Home/HeroSlider";
import OffersBanner from "../Components/Home/OffersBanner";
import NewsLetter from "../Components/Home/NewsLetter";

const Home = () => {
  return (
    <main>
      <HeroSlider />
      <Categories />
      <Features />
      <OffersBanner />
      <NewsLetter />
    </main>
  );
};

export default Home;
