import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img, title, tagline}) => {
    return (
        <div>

            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={img}
                bgImageAlt="the Foods"
                strength={-200}
            >
                <div
                className="hero h-[400px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center py-20">
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">
                                {tagline}
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
 
        </div>
    );
};

export default Cover;