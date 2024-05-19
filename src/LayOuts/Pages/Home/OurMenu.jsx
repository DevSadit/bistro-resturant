import { useEffect, useState } from "react";
import CompoHeading from "../../../Components/CompoHeading";
import MenuList from "../../../Components/MenuList";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(`menu.json`)
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === `popular`);
        setMenu(popular);
      });
  }, []);
  return (
    <div className="my-12">
      <div>
        <CompoHeading
          smHeading={`Check it Out`}
          bigHeading={`From Our Menu`}
        ></CompoHeading>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
