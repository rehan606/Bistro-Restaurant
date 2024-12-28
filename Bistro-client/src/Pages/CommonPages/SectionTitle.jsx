import React from 'react';

const SectionTitle = ({headding, subHeadding}) => {
    return (
        <div className='text-center mt-20'>
            <p className='text-orange-500 '>--- {headding} --- </p>
            <h2 className='text-3xl font-bold uppercase mt-3'> {subHeadding} </h2>
        </div>
    );
};

export default SectionTitle;