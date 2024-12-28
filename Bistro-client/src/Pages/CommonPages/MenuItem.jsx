import React from 'react';

const MenuItem = ({item}) => {

    const  {name , image, recipe, price} = item
    return (
        <div className='flex justify-between gap-4 space-y-2 text-gray-500'>
            <div className='w-3/12 '>
                <img src={image} alt="" className=' rounded-tl-none rounded-full border outline outline-orange-500' />
            </div>
            <div className='w-8/12'>
                <h2 className='text-xl uppercase'>{name} ----------</h2>
                <p>{recipe}</p>
            </div>
            <div className='w-1/12'>
                <p className='text-orange-500 font-bold'>$ {price}</p>
            </div>
        </div>
    );
};

export default MenuItem;