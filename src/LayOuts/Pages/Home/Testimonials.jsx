import CompoHeading from "../../../Components/CompoHeading";
import { SwiperSlide, Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`reviews.json`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="mb-12">
      <CompoHeading
        smHeading={`What Our Client Says `}
        bigHeading={`testimonials`}
      ></CompoHeading>

      {/*  */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col text-center gap-4 items-center px-16 py-12">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="w-20 h-20 mt-3" />
              <p>{review.details}</p>
              <h3 className="text-yellow-500 uppercase text-2xl font-semibold ">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
