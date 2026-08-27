import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    timeline: '',
    details: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ফর্ম সাবমিট লজিক (e.g. EmailJS, backend API)
    console.log(formData);
  };

  return (
    <section className="bg-[#171717] text-white py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Contact me
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Cultivating Connections: Reach Out And Connect With Me
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column Inputs */}
            <div className="flex flex-col gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#212121] border border-transparent focus:border-gray-600 rounded-lg px-5 py-4 text-gray-200 placeholder-gray-500 outline-none transition-all"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#212121] border border-transparent focus:border-gray-600 rounded-lg px-5 py-4 text-gray-200 placeholder-gray-500 outline-none transition-all"
              />

              <input
                type="text"
                name="timeline"
                placeholder="Timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full bg-[#212121] border border-transparent focus:border-gray-600 rounded-lg px-5 py-4 text-gray-200 placeholder-gray-500 outline-none transition-all"
              />
            </div>

            {/* Right Column Inputs & Textarea */}
            <div className="flex flex-col gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-[#212121] border border-transparent focus:border-gray-600 rounded-lg px-5 py-4 text-gray-200 placeholder-gray-500 outline-none transition-all"
                required
              />

              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#212121] border border-transparent focus:border-gray-600 rounded-lg px-5 py-4 text-gray-400 focus:text-gray-200 outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="" disabled hidden>
                    Service Of Interest
                  </option>
                  <option value="Machine Learning" className="bg-[#212121] text-white">
                    Machine Learning
                  </option>
                  <option value="Full Stack Web Dev" className="bg-[#212121] text-white">
                    Full Stack Web Dev
                  </option>
                  <option value="Data Analyst" className="bg-[#212121] text-white">
                    Data Analyst
                  </option>
                </select>
                {/* Select Dropdown Chevron Icon */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-400">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              <textarea
                name="details"
                rows={4}
                placeholder="Project Details..."
                value={formData.details}
                onChange={handleChange}
                className="w-full bg-[#212121] border border-transparent focus:border-gray-600 rounded-lg px-5 py-4 text-gray-200 placeholder-gray-500 outline-none resize-none transition-all"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="border border-gray-500 hover:border-white text-gray-200 hover:text-white px-10 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}