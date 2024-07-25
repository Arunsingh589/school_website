import React, { useState } from 'react';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    // Gallery data
    const galleryItems = {
        photos: [
            { src: '/1.jpeg', alt: 'Students participating in various sports events.', caption: 'Sports Day' },
            { src: '/2.jpeg', alt: 'Students presenting their science projects.', caption: 'Science Exhibition' },
            { src: '/3.jpeg', alt: 'Students performing in the cultural fest.', caption: 'Cultural Fest' },
            { src: '/4.jpeg', alt: 'A glimpse of our interactive classrooms.', caption: 'Classroom' },
            { src: '/5.jpeg', alt: 'Students reading and studying in the school library.', caption: 'Library' },
        ],
        videos: [
            { src: '/https://www.youtube.com/watch?v=Bn1BkCPrq34', alt: 'Virtual tour of Springdale Public School.', caption: 'School Tour' },
            { src: '/annual_function.mp4', alt: 'Highlights from the Annual Function 2023.', caption: 'Annual Function 2023' },
        ]
    };

    // Filter handler
    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
    };

    return (
        <section className="gallery mt-20 px-6 py-12 bg-gray-200 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800  mb-8 text-center ">Gallery</h2>

            {/* Filter Options */}
            <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-4 md:gap-6 cursor-pointer text-xl rounded-lg p-2">
                    <p onClick={() => handleFilterChange('all')} className={`p-2 ${filter === 'all' ? 'text-green-500' : ''}`}>All</p>
                    <p onClick={() => handleFilterChange('photos')} className={`p-2 ${filter === 'photos' ? 'text-green-500' : ''}`}>Photos</p>
                    <p onClick={() => handleFilterChange('videos')} className={`p-2 ${filter === 'videos' ? 'text-green-500' : ''}`}>Videos</p>
                </div>
            </div>

            {/* Gallery Content */}
            <div className="flex flex-wrap justify-center gap-6">
                {filter === 'all' || filter === 'photos' ? (
                    galleryItems.photos.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md w-80 h-96 flex flex-col items-center">
                            <img src={item.src} alt={item.alt} className="w-full h-60 object-cover rounded-lg mb-2" />
                            <p className="text-gray-700 text-center mt-4">{item.caption}</p>
                        </div>
                    ))
                ) : null}

                {filter === 'all' || filter === 'videos' ? (
                    galleryItems.videos.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md w-80 h-96 flex flex-col items-center">
                            <video controls className="w-full h-60 object-cover rounded-lg mb-2">
                                <source src={item.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <p className="text-gray-700 text-center mt-4">{item.caption}</p>
                        </div>
                    ))
                ) : null}
            </div>
        </section>
    );
};

export default Gallery;
