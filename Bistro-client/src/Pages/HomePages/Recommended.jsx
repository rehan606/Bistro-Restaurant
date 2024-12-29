import React from 'react';
import SectionTitle from '../CommonPages/SectionTitle';

const Recommended = () => {
    const cards = [
        {
          id: 1,
          image: "https://via.placeholder.com/300x200",
          title: "Card Title 1",
          description: "This is a short description of the first card.",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300x200",
          title: "Card Title 2",
          description: "This is a short description of the second card.",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300x200",
          title: "Card Title 2",
          description: "This is a short description of the second card.",
        },
        {
          id: 3,
          image: "https://via.placeholder.com/300x200",
          title: "Card Title 3",
          description: "This is a short description of the third card.",
        },
    ];

      
    return (
        <div>
            <section className="py-10 bg-gray-100">
                <div className="container mx-auto px-4">
                        <section className="">
                            <SectionTitle
                                headding={"You Should Try!"}
                                subHeadding={"Chef Recommended"}
                            ></SectionTitle>
                        </section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-20">
                    {cards.map((card) => (
                        <div
                        key={card.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden "
                        >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4">{card.description}</p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                            Add to Cart
                            </button>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recommended;