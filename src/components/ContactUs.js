import React from 'react';

const ContactUs = () => {
    return (
        <section className="contact-us mt-20 px-6 py-12 bg-gray-900 shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Contact Information */}
                <div className="contact-info bg-gray-900 p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                    <p className="text-lg text-white mb-4">
                        <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
                    </p>
                    <p className="text-lg text-white mb-4">
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p className="text-lg text-white mb-4">
                        <strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-600 hover:underline">info@springdale.edu</a>
                    </p>

                    {/* Contact Form */}
                    <h3 className="text-2xl font-semibold text-white mb-4">Contact Form</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            rows="4"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Google Maps Integration */}
                <div className="map bg-white rounded-lg shadow-md overflow-hidden">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.666743268136!2d-122.4201018846816!3d37.775180779758575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a5f4f96b9%3A0x0!2zMTIzIEVkdWNhdGlvbiBMbmUsIENpdHlpdmUsIFN0YXRl!5e0!3m2!1sen!2sus!4v1632909252416!5m2!1sen!2sus"
                        width="100%"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
