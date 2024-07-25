import React, { useState } from 'react';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className=" md:mt-10 px-6 py-12 bg-white shadow-lg rounded-lg">
            {/* "About Us" Text */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
            </div>

            {/* Content Layout */}
            <div className="flex flex-col md:flex-row items-start">
                {/* School Photo */}
                <div className="photo-container md:w-1/2 mb-8 md:mb-0 md:mr-8">
                    <img src="/schools.png" alt="School" className="w-full h-auto rounded-lg shadow-md object-cover" style={{ maxHeight: '400px' }} />
                </div>

                {/* Text Content */}
                <div className="text-content md:w-2/3">
                    <div className="space-y-8">
                        <div className="history">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">History</h3>
                            <p className="text-lg text-gray-700">
                                {isExpanded
                                    ? "Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."
                                    : "Founded in 1985, Springdale Public School has been dedicated to providing quality education..."}
                            </p>
                        </div>
                        <div className="vision">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Vision</h3>
                            <p className="text-lg text-gray-700">
                                {isExpanded
                                    ? "To create a learning environment that fosters academic excellence, critical thinking, and ethical values."
                                    : "To create a learning environment that fosters academic excellence..."}
                            </p>
                        </div>
                        <div className="mission">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Mission</h3>
                            <p className="text-lg text-gray-700">
                                {isExpanded
                                    ? "To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."
                                    : "To empower students with the knowledge, skills, and values needed..."}
                            </p>
                        </div>
                        <div className="principal-message">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Principal's Message</h3>
                            <p className="text-lg text-gray-700">
                                {isExpanded
                                    ? "At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."
                                    : "At Springdale, we believe in nurturing the potential..."}
                            </p>
                        </div>
                        <div className="infrastructure">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Infrastructure and Facilities</h3>
                            <ul className="list-disc list-inside text-lg text-gray-700">
                                <li>State-of-the-art science and computer labs</li>
                                <li>Spacious and well-equipped classrooms</li>
                                <li>Library with a vast collection of books and digital resources</li>
                                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-8">
                        <button
                            className="bg-white text-yellow-500 py-2 px-4 rounded-lg border-yellow-500 border-2 transition duration-300"
                            onClick={handleToggle}
                        >
                            {isExpanded ? "Show Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
