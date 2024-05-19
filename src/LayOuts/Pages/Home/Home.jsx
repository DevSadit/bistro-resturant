import Featured from "./Featured";
import OurMenu from "./OurMenu";
import Slider from "./Slider";
import Swipper from "./Swipper";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Swipper></Swipper>
      <OurMenu></OurMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
