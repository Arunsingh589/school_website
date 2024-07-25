import React from 'react';

const Faculty = () => {
    const facultyMembers = [
        {
            name: 'John Doe',
            position: 'Principal',
            qualifications: 'M.Ed',
            experience: '20 years of experience in educational administration',
        },
        {
            name: 'Jane Smith',
            position: 'Vice Principal',
            qualifications: 'M.Sc. in Physics',
            experience: '15 years of teaching experience',
        },
        {
            name: 'Emily Johnson',
            position: 'English Teacher',
            qualifications: 'M.A. in English',
            experience: '10 years of teaching experience',
        },
        {
            name: 'Michael Brown',
            position: 'Mathematics Teacher',
            qualifications: 'M.Sc. in Mathematics',
            experience: '8 years of teaching experience',
        },
        {
            name: 'Sophia Davis',
            position: 'Science Teacher',
            qualifications: 'M.Sc. in Chemistry',
            experience: '12 years of teaching experience',
        },
        {
            name: 'David Wilson',
            position: 'Computer Science Teacher',
            qualifications: 'B.Tech in Computer Science',
            experience: '5 years of teaching experience',
        },
    ];

    return (
        <section className="faculty mt-20 px-6 py-12 bg-gray-800 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Faculty Profiles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facultyMembers.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                        <p className="text-lg font-semibold text-gray-700 mb-1">{member.position}</p>
                        <p className="text-md text-gray-600 mb-2"><span className="font-semibold">Qualifications:</span> {member.qualifications}</p>
                        <p className="text-md text-gray-600"><span className="font-semibold">Experience:</span> {member.experience}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faculty;
