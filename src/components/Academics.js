import React from 'react';

const Academics = () => {
    return (
        <section className="academics mt-20 px-6 py-12 bg-gray-900 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">ACADEMICS</h2>

            {/* Curriculum Section */}
            <div className="curriculum mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">Curriculum</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Primary (Grades 1-5)</h4>
                        <p className="text-xl text-gray-700 font-semibold mb-2">English</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Science Art</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Mathematics</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Social Studies,</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Physical Education</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Secondary (Grades 6-10)</h4>
                        <p className="text-xl text-gray-800 font-semibold mb-2">English</p>
                        <p className="text-xl text-gray-700 font-semibold mb-2">Science(Physics, Chemistry, Biology) </p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Science Art</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Mathematics</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Social Studies,</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Physical Education</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Art</p>
                        <p className='text-xl font-semibold text-gray-800 mb-2'>Computer Science</p>


                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Senior Secondary (Grades 11-12)</h4>
                        <p className="text-lg text-gray-700">
                            <span className="font-bold text-xl">Science Stream:</span> Physics, Chemistry, Biology, Mathematics, Computer Science, English

                        </p>
                        <p className="text-lg text-gray-700">
                            <span className="font-semibold">Commerce Stream:</span> Accountancy, Business Studies, Economics, Mathematics, English
                        </p>
                    </div>
                </div>
            </div>

            {/* Teaching Methodologies Section */}
            <div className="teaching-methodologies mb-12">
                <h3 className="text-2xl font-semibold text-white mb-4">Teaching Methodologies</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700">We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
                </div>
            </div>

            {/* Educational Resources Section */}
            <div className="educational-resources">
                <h3 className="text-2xl font-semibold text-white mb-4">Educational Resources</h3>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg text-gray-700">Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
                </div>
            </div>
        </section>
    );
};

export default Academics;
