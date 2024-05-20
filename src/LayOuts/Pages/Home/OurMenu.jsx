import CompoHeading from "../../../Components/CompoHeading";
import MenuList from "../../../Components/MenuList";
import useMenu from "../../../hooks/useMenu";

const OurMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch(`menu.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popular = data.filter((item) => item.category === `popular`);
  //       setMenu(popular);
  //     });
  // }, []);

  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="my-12">
      <div>
        <CompoHeading
          smHeading={`Check it Out`}
          bigHeading={`From Our Menu`}
        ></CompoHeading>
      </div>
      <div className="grid mt-10 grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuList key={item._id} item={item}></MenuList>
        ))}
      </div>
    </div>
  );
};

export default OurMenu;
