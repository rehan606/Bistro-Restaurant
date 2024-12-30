import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl relative border">
                <figure>
                    <img
                    src={image}
                    alt="food" className='w-full' />
                </figure>
                <p className='absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-md font-semibold'>$ {price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <div className='flex justify-center mt-10'>
                            <button className="bg-blue-500 hover:bg-blue-600 border-b-4 border-orange-500  text-white py-2 px-4 rounded shadow">View full Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;