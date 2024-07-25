import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';


const HomePage = () => {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        }
        else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <div className="relative lg:min-h-screen bg-gray-100">
            {/* Carousel Section */}
            <div className="relative inset-0 top-0 left-0 right-0 bottom-0 z-0">
                <Carousel showThumbs={false} autoPlay infiniteLoop>
                    <div className="relative md:inline-block w-full h-[450px] md:h-[800px]">
                        <img src="/event4.jpg" alt="Annual Sports Day" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-20 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end items-start">
                            <div className='text-white font-black text-lg md:text-4xl lg:text-6xl mb-2 text-left'>
                                Annual Sports Day - Celebrating Excellence in Sports
                            </div>
                        </div>
                    </div>
                    <div className="relative inline-block w-full h-[450px] md:h-[800px]">
                        <img src="/event5.jpeg" alt="Annual Sports Day" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-20 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end items-start">
                            <div className='text-white font-black text-lg md:text-4xl lg:text-6xl mb-2 text-left'>
                                Science Exhibition - Showcasing Student Innovations
                            </div>
                        </div>
                    </div>
                    <div className="relative inline-block w-full h-[450px] md:h-[800px]">
                        <img src="/event6.jpg" alt="Annual Sports Day" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-20 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end items-start">
                            <div className='text-white font-black text-lg md:text-4xl lg:text-6xl mb-2 text-left'>
                                Cultural Fest - Embracing Diversity and Creativity
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>

            {/* Introduction Section */}
            <header className="absolute top-0 left-0 right-0  text-white z-10">
                <div className="flex flex-col md:flex-row items-center p-2 bg-gray-900 justify-between">
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl font-bold mb-4">Springdale Public School</h1>

                    </div>
                    <img src='/school.jpeg' alt="School Logo" className="h-16 w-20 mt-4 md:mt-0 md:ml-10" />
                </div>

                <p className="text-xl font-bold mt-2 ml-2 max-w-2xl">
                    Welcome to Springdale Public School, where we nurture young minds for a brighter future.
                </p>
            </header>

            {/* Quick Links Section */}
            <section className="absolute top-20 justify-center items-center flex right-36 md:right-10 text-white font-bold p-4 text-sm md:text-xl gap-2 md:gap-4 w-[45%] z-10">
                <Link to="admissions" smooth={true} duration={1000} className="hover:underline">Admissions</Link>
                <Link to="academics" smooth={true} duration={1000} className="hover:underline">Academics</Link>
                <Link to="gallery" smooth={true} duration={1000} className="hover:underline flex">Gallery</Link>
                <Link to="contact-us" smooth={true} duration={1000} className="hover:underline flex">Contact</Link>
                <Link to="about-us" smooth={true} duration={1000} className="hover:underline flex">About</Link>
            </section>

            {/* Centered Button */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
                {/* Uncomment and update the link as needed */}
                {/* <Link to={'/aboutus'}>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                        About Us
                    </button>
                </Link> */}
            </div>
        </div>
    );
};

export default HomePage;
