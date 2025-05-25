import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact" className="w-full mb-10">
      <div className="mb-8">
        <h1 className="text-base sm:text-lg font-semibold text-white mb-4">
          Get in Touch
        </h1>
        <p className="text-xs sm:text-sm text-gray-400">
          Looking to hire a full-stack developer or have any other inquiries?
          Feel free to get in touch.
        </p>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-border dark:border-borderDark rounded-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-transparent border border-border dark:border-borderDark rounded-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm"
            />
          </div>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-transparent border border-border dark:border-borderDark rounded-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none transition-colors duration-200 text-sm"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full py-1 bg-white text-black font-medium rounded-sm hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
