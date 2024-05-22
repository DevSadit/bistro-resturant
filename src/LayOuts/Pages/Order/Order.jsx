import BgImg from "../shared/BgImg/BgImg";
import orderBgImg from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCategory from "../shared/FoodCategory/FoodCategory";
import { useParams } from "react-router-dom";
const Order = () => {
  const [menu] = useMenu();
  const categories = ["salads", "pizzas", "soups", "deserts", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  // console.log(category);
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
          <Tab>Soups</Tab>
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
