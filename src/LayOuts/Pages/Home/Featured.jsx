import CompoHeading from "../../../Components/CompoHeading";
import fPic from '../../../assets/home/featured.jpg'
import "../../../bgimg.css";
const Featured = () => {
  return (
    <div className="pt-8    bg-fixed bgimg my-12">
      <CompoHeading
        smHeading={`Check it out`}
        bigHeading={`from our menu`}
      ></CompoHeading>

      <div className="flex justify-center items-center gap-x-5 py-36 px-32 bg-slate-400 bg-opacity-30">
        <div className="w-5/12">
          <img src={fPic} />
        </div>
        <div className="w-3/5 text-white">
          <p>MArch 20, 2024</p>
          <h4 className="uppercase text-2xl font-semibold">
            Where Can i get some ?
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            voluptatibus, reprehenderit nesciunt enim pariatur sequi beatae
            blanditiis fugiat, vel veritatis adipisci? Assumenda non cum
            reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem praesentium hic modi tempora labore. Quo ducimus aperiam voluptatum aliquid!
          </p>
          <button className="btn text-white btn-outline border-0 border-b-2 border-black">Default</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
