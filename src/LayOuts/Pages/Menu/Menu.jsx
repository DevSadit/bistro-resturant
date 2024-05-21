import { Helmet } from "react-helmet-async";
import BgImg from "../shared/BgImg/BgImg";
import menuBg from "../../../assets/menu/banner3.jpg";
import CompoHeading from "../../../Components/CompoHeading";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../shared/MenuCategory/MenuCategory";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Our Menu | Bistro</title>
      </Helmet>
      <BgImg heading="Our Menu" img={menuBg}></BgImg>

      {/* heading */}
      <CompoHeading
        smHeading="dont miss"
        bigHeading="todays offer"
      ></CompoHeading>

      {/* offers */}
      <MenuCategory items={offers}></MenuCategory>

      {/* dessert */}
      <MenuCategory
        items={desserts}
        title="deserts"
        img={desertImg}
      ></MenuCategory>

      {/* PIZZA */}
      <MenuCategory items={pizzas} title="pizzas" img={pizzaImg}></MenuCategory>

      {/* salad */}
      <MenuCategory items={salads} title="salads" img={saladImg}></MenuCategory>

      {/* soups */}
      <MenuCategory items={soups} title="soups" img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
