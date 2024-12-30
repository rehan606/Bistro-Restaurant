import React from 'react';
import { Helmet, } from 'react-helmet-async';
import Cover from '../CommonPages/Cover';
import menuImage from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../CommonPages/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {

    const [ menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div className='py-20'>
            <Helmet>
                <title>Menu | Bistro-Resturant</title>
            </Helmet>
            <div className='w-11/12 mx-auto -mt-20'>
                <Cover img={menuImage} title='Our Menu' tagline={''}></Cover>
                <SectionTitle subHeadding={'Todays offer '} headding={'Dont Miss'}></SectionTitle>
                {/* Offered items  */}
                <MenuCategory items={offered}></MenuCategory>
                {/* Dessert item  */}
                <MenuCategory items={desserts} title={'dessert' } img={dessertImage} ></MenuCategory>
                {/* Fizza item  */}
                <MenuCategory items={pizza} title="pizza" img={pizzaImage} ></MenuCategory>
                {/* Salad item  */}
                <MenuCategory items={salad} title="s" img={saladImage} ></MenuCategory>
                {/* Soup item  */}
                <MenuCategory items={soup} title="soup" img={soupImage} ></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;