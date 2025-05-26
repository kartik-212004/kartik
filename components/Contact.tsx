import React, { useState, useEffect } from "react";
import axios from "axios";

interface Data {
  name: string | null;
  email: string | null;
  message: string | null;
}

interface Status {
  type: string | null;
  message: null | string;
}

export default function ContactForm() {
  const [data, setdata] = useState<Data>({
    name: null,
    email: null,
    message: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setstatus] = useState<Status>({ type: null, message: null });

  // Auto-reset the button after 3 seconds on success
  useEffect(() => {
    if (status.type === "success") {
      const timer = setTimeout(() => {
        setstatus({ type: null, message: null });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status.type]);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const response = await axios.post("/api/nodemailer", data);
    console.log(response.data);
    console.log(response);
    if (response.status == 200) {
      setstatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      });
    } else {
      setstatus({
        type: "error",
        message: data.message || "Something went wrong. Please try again.",
      });
    }
    setIsSubmitting(false);
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

      {/* Status Message */}
      {status.type && (
        <div
          className={`mb-4 p-3 rounded-sm text-sm ${
            status.type === "success"
              ? "bg-green-900/20 border border-green-700 text-green-300"
              : "bg-red-900/20 border border-red-700 text-red-300"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              onChange={(e) => setdata({ ...data, name: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-border dark:border-borderDark rounded-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              onChange={(e) => setdata({ ...data, email: e.target.value })}
              className="w-full px-4 py-3 bg-transparent border border-border dark:border-borderDark rounded-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-200 text-sm"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message *"
            rows={6}
            onChange={(e) => setdata({ ...data, message: e.target.value })}
            className="w-full px-4 py-3 bg-transparent border border-border dark:border-borderDark rounded-sm text-gray-300 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-none transition-colors duration-200 text-sm"
            disabled={isSubmitting}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full py-3 font-medium rounded-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed ${
            status.type === "success"
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          {isSubmitting
            ? "Sending..."
            : status.type === "success"
            ? "Submitted!"
            : "Submit"}
        </button>
      </div>
    </div>
  );
}
