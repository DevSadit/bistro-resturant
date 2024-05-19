import bossImg from "../../../assets/home/chef-service.jpg";

const Boss = () => {
  return (
    <div
      className="py-14 px-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${bossImg})` }}
    >
      <div className="bg-white text-center space-y-5 my-36 mx-12 p-24">
        <h2 className="text-4xl ">Bistro Boss</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Boss;
