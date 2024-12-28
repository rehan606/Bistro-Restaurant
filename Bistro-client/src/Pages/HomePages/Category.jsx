// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import category1 from "../../assets/home/slide1.jpg";
import category2 from "../../assets/home/slide2.jpg";
import category3 from "../../assets/home/slide3.jpg";
import category4 from "../../assets/home/slide4.jpg";
import category5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../CommonPages/SectionTitle";

const Category = () => {
    return (
        <section>
            <div>
                <SectionTitle 
                    headding={'From 11.00am to 10.00pm'}
                    subHeadding={'Order Online'}></SectionTitle>
            </div>
            

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-10"
            >
                <SwiperSlide>
                <img src={category1} alt="" />
                <h2 className=" text-2xl text-center font-bold shadow-lg uppercase text-gray-700 -mt-16 pb-10">
                    Salads
                </h2>
                </SwiperSlide>
                <SwiperSlide>
                <img src={category2} alt="" />
                <h2 className=" text-2xl text-center font-bold shadow-lg uppercase text-gray-700 -mt-16">
                    Soups
                </h2>
                </SwiperSlide>
                <SwiperSlide>
                <img src={category3} alt="" />
                <h2 className=" text-2xl text-center font-bold shadow-lg uppercase text-gray-700 -mt-16">
                    Pizzas
                </h2>
                </SwiperSlide>
                <SwiperSlide>
                <img src={category4} alt="" />
                <h2 className=" text-2xl text-center font-bold shadow-lg uppercase text-gray-700 -mt-16">
                    Desserts
                </h2>
                </SwiperSlide>
                <SwiperSlide>
                <img src={category5} alt="" />
                <h2 className=" text-2xl text-center font-bold shadow-lg uppercase text-gray-700 -mt-16">
                    Salad
                </h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
