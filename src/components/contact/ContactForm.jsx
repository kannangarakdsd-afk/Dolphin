import React from 'react'

export default function ContactForm() {
//   if (isLoading) return <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-lg" />;

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
      <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-xs font-bold mb-1">Name *</label>
          <input type="text" placeholder="Your name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-bold mb-1">Email *</label>
          <input type="email" placeholder="your.email@example.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-bold mb-1">Phone *</label>
          <input type="text" placeholder="0712345678" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-blue-500" />
        </div>
        <div>
          <label className="block text-xs font-bold mb-1">Message *</label>
          <textarea rows="4" placeholder="Tell us about your project..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-md outline-blue-500" />
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  )
}
