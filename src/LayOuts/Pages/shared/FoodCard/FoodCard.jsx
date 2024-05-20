const FoodCard = ({ item }) => {
    // console.log(item);
    const { name, image } = item;

  return (
    <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img className="object-cover w-full h-56" src={image} alt="avatar" />

      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          role="link"
        >
          {name}
        </a>
        <span className="text-sm text-gray-700 dark:text-gray-200 px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          voluptatibus.
        </span>
      </div>
      <div className="mb-3 text-center"> 
        <button className="btn btn-outline mt-3">Add To Card</button>
      </div>
    </div>
  );
};

export default FoodCard;
