import React from 'react';

const About = () => {
  return (
    <div className="p-5 bg-gray-200">
      <h1 className="text-center">ABOUT</h1> {/* Centered heading */}
      <div className="flex justify-center mb-5"> {/* Centered 'About' text */}
        <h2 className="text-center font-bold text-black text-2xl">About us</h2> {/* Added fontSize */}
      </div>
      <div className="flex justify-around mb-5">
        <div className="bg-blue-500 text-white p-3 rounded">
          <p>Experience</p>
          <p> 1 year working</p>
        </div>
        <div className="bg-blue-500 text-white p-3 rounded">
          <p>Experience</p>
          <p> 2 years working</p>
        </div>
        <div className="bg-blue-500 text-white p-3 rounded">
          <p>Experience</p>
          <p>2+ years working</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <img 
          src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737388466/WhatsApp_Image_2025-01-18_at_15.07.09_3f4ccbe8_whmled.jpg" 
          alt="Cityscape at night" 
          className="w-full lg:w-1/2 h-auto object-cover rounded-lg" 
        />
        <div className="text-black flex-1">
          <p>
            Welcome to Varsity Africa, a photography website that captures the beauty, diversity, and vibrancy of the African continent. Our mission is to showcase Africa's rich cultural heritage, its people, and its stunning landscapes through the lens of our passionate photographers. At Varsity Africa, we believe that photography has the power to tell stories, inspire change, and unite people across borders. Whether you are an avid traveler, a photography enthusiast, or simply curious about Africa, we invite you to explore our collection and join us on this visual journey of discovery. Kind Regards,
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-purple-700 text-white py-2 px-4 rounded">
          LET'S TALK
        </button>
      </div>
    </div>
  );
}

export default About;
