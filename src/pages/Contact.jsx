import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Contact Us
        </h1>

        {/* Contact Information Section */}
        <section className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-600 mb-2">Email: support@example.com</p>
            <p className="text-gray-600 mb-2">Working Hours: Mon - Fri, 9 AM - 6 PM</p>
          </div>

          {/* Address Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h2>
            <p className="text-gray-600 mb-2">1234 Example Street</p>
            <p className="text-gray-600 mb-2">City, State, 56789</p>
            <p className="text-gray-600 mb-2">Country</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-4">
              <div className="text-lg font-semibold text-gray-700">
                <p>How can I get support?</p>
                <p className="text-gray-600">You can contact us via email or use our live chat support below.</p>
              </div>
              <div className="text-lg font-semibold text-gray-700">
                <p>What are your working hours?</p>
                <p className="text-gray-600">We are available Monday to Friday, 9 AM to 6 PM.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Support Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Chat Support</h2>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 mb-4">Need help? Our chat support is available 24/7. Click below to start chatting.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Chat
            </button>
          </div>
        </section>

        {/* Call Us Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Call Us Now</h2>
          <p className="text-lg text-gray-600 mb-4">Our phone support is available during business hours. Call us today at:</p>
          <p className="text-2xl font-semibold text-blue-600">(123) 456-7890</p>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Call Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
