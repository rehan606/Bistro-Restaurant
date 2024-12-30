import React from 'react';
import MenuItem from '../CommonPages/MenuItem';
import Cover from '../CommonPages/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='mt-20'>
            { title && <Cover img={img} title={title} tagline={''}></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-20'>
                {
                    items.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link to={`/order/${title}`} className="bg-blue-500 hover:bg-blue-600 border-b-4 border-orange-500  text-white py-2 px-4 rounded shadow">View full Menu</Link>
            </div>
            
        </div>
    );
};

export default MenuCategory;