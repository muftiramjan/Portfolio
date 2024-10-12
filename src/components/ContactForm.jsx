"use client"
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    twitter: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted: ", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6">
      <div
        style={{
          animation: 'slideIn 1.2s ease-out'
        }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Let’s Message Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            />
          </div>

          {/* Phone */}
          <div className="group">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            />
          </div>

          {/* Address */}
          <div className="group">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            />
          </div>

          {/* LinkedIn */}
          <div className="group">
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedin"
              id="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            />
          </div>

          {/* GitHub */}
          <div className="group">
            <label htmlFor="github" className="block text-sm font-medium text-gray-700">
              GitHub Profile
            </label>
            <input
              type="url"
              name="github"
              id="github"
              value={formData.github}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            />
          </div>

          {/* Twitter */}
          <div className="group">
            <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">
              Twitter Profile
            </label>
            <input
              type="url"
              name="twitter"
              id="twitter"
              value={formData.twitter}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            />
          </div>

          {/* Message */}
          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 hover:transform hover:scale-105 focus:scale-105"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="group">
            <button
              type="submit"
              style={{
                transition: 'transform 0.5s ease-in-out',
              }}
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 hover:transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Inline Keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;

