import React, { useEffect, useState } from 'react';
import SectionTitle from '../CommonPages/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";

// import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// Rating 
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])


    return (
        <div className='pb-20'>
            <section className=" ">
                <SectionTitle
                    headding={"What our client say"}
                    subHeadding={"Testimonials"}
                ></SectionTitle>
            </section>

            <div className='pt-20' >
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='text-center md:px-40'>
                                <div className='flex justify-center text-4xl mb-4'>
                                    <FaQuoteLeft />
                                </div>
                                <div className='flex justify-center mb-5'>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                        />
                                </div>
                                <p>{review.details}</p>
                                <h2 className='text-xl uppercase text-orange-500 mt-3 font-semibold'>{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;