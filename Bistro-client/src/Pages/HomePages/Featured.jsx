import React from "react";
import featuredImg from "../../assets/home/featured.jpg";
import SectionTitle from "../CommonPages/SectionTitle";

const Featured = () => {
  return (
      <div
        className="relative bg-cover bg-center pt-2 pb-20"
        style={{ backgroundImage: `url(${featuredImg})`, backgroundAttachment: "fixed"  }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div>
          <section className="text-white ">
            <SectionTitle
              headding={"Check it out"}
              subHeadding={"From our menu"}
            ></SectionTitle>
          </section>
          <div className="relative w-11/12 mx-auto px-4 py-12 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Column 1: Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src={featuredImg}
                alt="Descriptive Alt Text"
                className="rounded-lg shadow-lg w-full md:w-3/4"
              />
            </div>
            {/* Column 2: Content */}
            <div className="w-full md:w-1/2 text-white space-y-4">
              <p className="text-gray-300 text-sm">12th January 2025</p>
              <h2 className="text-3xl font-bold">Engaging Heading Here</h2>
              <p className="text-gray-300">
                A short description of the content goes here, providing an
                overview and enticing readers to learn more.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 border-b-4 border-orange-500  text-white py-2 px-4 rounded shadow">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Featured;
