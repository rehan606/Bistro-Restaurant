import React from 'react';
import MenuItem from '../CommonPages/MenuItem';
import Cover from '../CommonPages/Cover';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='mt-20'>
            { title && <Cover img={img} title={title} tagline={''}></Cover>}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-20'>
                {
                    items.map((item) => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            
        </div>
    );
};

export default MenuCategory;