import MenuList from "../../../../Components/MenuList";
import BgImg from "../BgImg/BgImg";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>

      {title && <BgImg img={img} heading={title}></BgImg>}

      
      <div className="grid mt-10 grid-cols-2 gap-4 my-10">
        {items.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
