import React from 'react';

const Admissions = () => {
    return (
        <section className="admissions mt-20 px-6 py-12 bg-gray-100 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admissions</h2>

            {/* Admission Process and Criteria */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Process</h3>
                    <p className="text-lg text-gray-700">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md flex-1">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Criteria</h3>
                    <p className="text-lg text-gray-700">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
                </div>
            </div>

            {/* Important Dates */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates</h3>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li><strong>Admission Form Availability:</strong> March 1st</li>
                    <li><strong>Last Date for Submission:</strong> March 31st</li>
                    <li><strong>Entrance Test:</strong> April 15th</li>
                    <li><strong>Announcement of Results:</strong> April 30th</li>
                </ul>
            </div>
        </section>
    );
};

export default Admissions;
