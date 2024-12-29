import React, { useEffect, useState } from 'react';
import SectionTitle from '../CommonPages/SectionTitle';
import MenuItem from '../CommonPages/MenuItem';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([])

    // useEffect(()=> {
    //     fetch('menu.json')
    //     .then(res =>  res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     } )

    // }, [])

    return (
        <section>
            <div>
                <SectionTitle 
                    headding={'Check it out'}
                    subHeadding={'From our menu'}></SectionTitle>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-20'>
                {
                    popular.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className='flex justify-center mt-10'>
                <button className="bg-blue-500 hover:bg-blue-600 border-b-4 border-orange-500  text-white py-2 px-4 rounded shadow">View full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;