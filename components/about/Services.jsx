import React from 'react';

const ServiceCard = ({ title, description, imageUrl }) => (
  <div
    className="relative bg-cover bg-center h-96 w-full rounded-lg overflow-hidden shadow-lg"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-6">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-200 mb-4">{description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">CONTACT US</button>
    </div>
  </div>
);

const Services = () => (
  <div className="w-full py-12 bg-gray-300">
    <h1 className="text-4xl font-bold text-center text-black mb-12">OUR SERVICES</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
      <ServiceCard
        title="EVENT SHOTS"
        description="We specialize in event photography, capturing the essence of each occasion through creative and technical expertise. Trust us to deliver stunning images that tell the story of your special day."
        imageUrl="https://res.cloudinary.com/dacpiss4b/image/upload/v1737732516/photo_2025-01-19_23-54-26_ypvztl.jpg"
      />
      <ServiceCard
        title="PORTRAIT PHOTOGRAPHY"
        description="Our portrait photography services aim to capture the unique personality and essence of each individual. We create timeless portraits that you will cherish forever."
        imageUrl="https://res.cloudinary.com/dacpiss4b/image/upload/v1737281607/DSC_0152_hexd1v.jpg"
      />
      <ServiceCard
        title="LANDSCAPE PHOTOGRAPHY"
        description="Experience the beauty of nature through our landscape photography. We capture breathtaking scenes that showcase the wonders of the natural world."
        imageUrl="https://res.cloudinary.com/dacpiss4b/image/upload/v1737741684/WhatsApp_Image_2025-01-24_at_20.56.45_bb778a02_djprbn.jpg"
      />
    </div>
  </div>
);

export default Services;
