import Boss from "./Boss";
import CallUs from "./CallUs";
import ChefReco from "./ChefReco";
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
      <Boss></Boss>
      <CallUs></CallUs>
      <ChefReco></ChefReco>
      <OurMenu></OurMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
