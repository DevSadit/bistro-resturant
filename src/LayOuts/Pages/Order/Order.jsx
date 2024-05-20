import BgImg from "../shared/BgImg/BgImg";
import orderBgImg from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import FoodCard from "../shared/FoodCard/FoodCard";
import useMenu from "../../../hooks/useMenu";
import FoodCategory from "../shared/FoodCategory/FoodCategory";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="mt-16">
      <Helmet>
        <title>Order | Bistro</title>
      </Helmet>
      <BgImg img={orderBgImg} heading="our shop"></BgImg>
      {/* tabs */}
      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className="my-12"
      >
        <TabList className="text-center">
          <Tab>salads</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        <TabPanel>
          <FoodCategory items={salads}></FoodCategory>
        </TabPanel>
        <TabPanel>
          <FoodCategory items={pizzas}></FoodCategory>
        </TabPanel>
        <TabPanel>
          <FoodCategory items={soups}></FoodCategory>
        </TabPanel>
        <TabPanel>
          <FoodCategory items={desserts}></FoodCategory>
        </TabPanel>
        <TabPanel>
          <FoodCategory items={drinks}></FoodCategory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
