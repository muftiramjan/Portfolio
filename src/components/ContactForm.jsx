"use client"
import { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const ContactForm = () => {
  const defaultInfo = {
    name: "Ramjan Ali",
    email: "alibinalaluddin@gmail.com",
    phone: "01774491140",
    address: "Lalmonirhat,rongpor",
    linkedin: "https://www.linkedin.com/in/md-ramjan-ali-programar/",
    github: "https://github.com/muftiramjan",
    facebook: "https://web.facebook.com/mofti.ramajan/",
  };

  const [visitorData, setVisitorData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleVisitorChange = (e) => {
    setVisitorData({
      ...visitorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleVisitorSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(visitorData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        console.error(data.message);
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending message.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6">
      {/* Your Info */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Information</h2>
        <ul className="space-y-2">
          <li><strong>Name:</strong> {defaultInfo.name}</li>
          <li><strong>Email:</strong> {defaultInfo.email}</li>
          <li><strong>Phone:</strong> {defaultInfo.phone}</li>
          <li><strong>Address:</strong> {defaultInfo.address}</li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href={defaultInfo.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-500" />
          </a>
          <a href={defaultInfo.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-700 hover:text-gray-500" />
          </a>
          <a href={defaultInfo.twitter} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-blue-400 hover:text-blue-300" />
          </a>
        </div>
      </div>

      {/* Visitor Info */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Visitor Information</h2>
        <form onSubmit={handleVisitorSubmit} className="space-y-4">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={visitorData.name}
              onChange={handleVisitorChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={visitorData.email}
              onChange={handleVisitorChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              value={visitorData.message}
              onChange={handleVisitorChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <div className="group">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

