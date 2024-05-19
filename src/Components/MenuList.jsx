const MenuList = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
      <div className="flex gap-x-3">
        <div className="w-24">
          <img style={{borderRadius: "0 200px 200px 200px"}} src={image} />
        </div>
        <div>
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">{name} -------</h1>
            <p className="text-yellow-500">${price}</p>
          </div>
          <p>{recipe}</p>
        </div>
      </div>
    );
};

export default MenuList;