import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Service from './Service';
import Menu from './Menu';
import Featured from './Featured';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
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
                <Menu></Menu>
            </section>
            <section className='w-11/12 mx-auto mt-20 mb-20'>
                <Featured></Featured>
            </section>
            <section className='w-11/12 mx-auto mt-20 mb-20'>
                <Testimonials></Testimonials>
            </section>
        </div>
    );
};

export default Home;