import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
      <h1 className="text-3xl font-bold mb-2 text-black">WRITE TO US</h1>
      <p className="text-lg mb-6 text-black">Which Event of your life you want to make Memorable by hiring us..</p>
      <div className="flex flex-col md:flex-row w-full max-w-4xl">
        <div className="flex-1 p-4">
          <h2 className="text-gray-500 mb-4 text-black">CONTACT INFO</h2>
          <div className="mb-4">
            <label className="block">
              <input type="checkbox" className="mr-2" /> <span className="text-black">Wedding</span>
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> <span className="text-black">Pre/Post Wedding</span>
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> <span className="text-black">Model shoot</span>
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> <span className="text-black">Babies/Kids Shoot</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-black">Your Name</label>
            <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-black">Mobile *</label>
            <input type="text" placeholder="Your contact details" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-black">Your Email</label>
            <input type="email" placeholder="Your email id" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-black">Your Message</label>
            <textarea placeholder="please specify your requirements and event details here." className="w-full p-2 border border-gray-300 rounded"></textarea>
          </div>
          <button className="bg-gray-700 text-white px-4 py-2 rounded">send enquiry</button>
        </div>
        <div className="flex-1 p-4">
          <img src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737742764/sunset-5584004_640_bseqjd.jpg" alt="A couple standing on rocks with a scenic background" className="w-full h-auto rounded" />
        </div>
      </div>
    </div>
  );
};

const Writetous = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};

export default Writetous;
