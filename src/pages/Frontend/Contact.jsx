
import React from 'react'

const Contact = () => {
  return (
    <div className="pt-28 pb-16 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        We'd love to hear from you! Please reach out for inquiries, collaborations, or support.
      </p>

      {/* Simple form placeholder */}
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        ></textarea>
        <button
          type="submit"
          className="rounded-lg bg-red-600 px-6 py-2 text-white font-semibold shadow-md hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact

