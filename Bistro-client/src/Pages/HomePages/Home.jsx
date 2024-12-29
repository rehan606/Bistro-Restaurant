import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Service from './Service';
import PopularMenu from './PopularMenu';
import Featured from './Featured';
import Testimonials from './Testimonials';
import Recommended from './Recommended';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro-Resturant</title>
            </Helmet>
            <section className='w-11/12 mx-auto'>
                <Banner></Banner>
            </section>
            <section className='w-11/12 mx-auto'>
                <Category></Category>
            </section>
            <section className='w-11/12 mx-auto mt-20'>
                <Service></Service>
            </section>
            <section className='w-11/12 mx-auto mt-20 mb-20'>
                <PopularMenu></PopularMenu>
            </section>
            <section className='w-11/12 mx-auto mt-20 mb-20'>
                <Recommended></Recommended>
            </section>
            <section className=' mt-20 mb-20'>
                <Featured></Featured>
            </section>
            <section className='w-11/12 mx-auto mt-20 mb-20'>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;