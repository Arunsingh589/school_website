import React from 'react';

const Students = () => {
    return (
        <section className="students mt-20 px-6 py-12 bg-gray-200 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Student Life at Springdale</h2>

            {/* Container for boxes */}
            <div className="flex flex-wrap gap-8 justify-center">
                {/* Extracurricular Activities */}
                <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extracurricular Activities</h3>
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        <li>Music</li>
                        <li>Dance</li>
                        <li>Drama</li>
                        <li>Art</li>
                        <li>Sports</li>
                        <li>Robotics</li>
                        <li>Debate Club</li>
                        <li>Science Club</li>
                    </ul>
                </div>

                {/* Clubs and Societies */}
                <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clubs and Societies</h3>
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        <li>Literary Society</li>
                        <li>Environmental Club</li>
                        <li>Astronomy Club</li>
                        <li>Coding Club</li>
                    </ul>
                </div>

                {/* Achievements */}
                <div className="flex-1 min-w-[250px] bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Achievements</h3>
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        <li>John Smith - National Level Math Olympiad Winner</li>
                        <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
                        <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
                    </ul>
                </div>
            </div>

            {/* Student Council */}
            <div className="student-council mt-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Student Council</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg text-gray-700">
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">President</h4>
                        <p>Amy Parker</p>
                        <p>Grade 12</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Vice President</h4>
                        <p>Rajiv Mehta</p>
                        <p>Grade 11</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md text-center">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Secretary</h4>
                        <p>Lisa Wong</p>
                        <p>Grade 10</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Students;
