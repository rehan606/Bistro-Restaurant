import React from 'react';
import Banner from './Banner';
import Category from './Category';
import Service from './Service';
import Menu from './Menu';

const Home = () => {
    return (
        <div>
            <section className='w-11/12 mx-auto'>
                <Banner></Banner>
            </section>
            <section className='w-11/12 mx-auto'>
                <Category></Category>
            </section>
            <section className='w-11/12 mx-auto py-20'>
                <Service></Service>
            </section>
            <section className='w-11/12 mx-auto py-20'>
                <Menu></Menu>
            </section>
        </div>
    );
};

export default Home;