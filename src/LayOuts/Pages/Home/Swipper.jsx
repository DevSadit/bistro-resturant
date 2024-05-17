import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
const Swipper = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-orange-400">---From 11:00am to 10:00pm---</p>
        <hr className="mt-3" />
        <h3 className="text-3xl my-3">ORDER ONLINE</h3>
      </div>
      <div className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-12">
            <img className="w-full" src={img1} />
            <h3 className="text-white text-4xl text-center -mt-14">Salads</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img2} />
            <h3 className="text-white text-4xl text-center -mt-14">Pizza</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img3} />
            <h3 className="text-white text-4xl text-center -mt-14">Soup</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img4} />
            <h3 className="text-white text-4xl text-center -mt-14">Desert</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full" src={img5} />
            <h3 className="text-white text-4xl text-center -mt-14">Salad</h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipper;
