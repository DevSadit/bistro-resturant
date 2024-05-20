const BgImg = ({ img, heading }) => {
  return (
    <div
      className="hero md:h-[700px] mt-16 bg-center bg-cover"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 w-3/4 h-4/6"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-3/4 px-10">
          <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad
            explicabo voluptas rem magni, architecto accusamus totam qui officia
            dicta. Repellendus harum beatae esse cupiditate sint similique
            asperiores doloribus soluta impedit illo autem tempore, ullam iste
            vel quia possimus totam tempora aspernatur commodi, porro sunt illum
            reiciendis! Id, magni sunt!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BgImg;
