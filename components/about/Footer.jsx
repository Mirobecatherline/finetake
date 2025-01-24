import React from 'react';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow">
        <img
          src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737737229/955f4df1f56d33413bdf185913dfbda3_vk0a5t.png"
          alt="Map showing Chuka, Kenya with various landmarks"
          className="w-full"
        />
      </div>
      <Footer />
      <div className="bg-black text-white text-center py-4">
        <p>Copyright © 2024 fintake IT technicians </p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-bold mb-2">visit us</h3>
            <p>1234 chuka Meru, Kenya</p>
            <p>1234 chuka Meru, Kenya</p>
            <p>1234 chuka Meru, Kenya</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">call us</h3>
            <p>+254-7123456789</p>
            <p>+254-7123456789</p>
            <p>+254-7123456789</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Email Us</h3>
            <p>Fintake@email.com</p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end mt-8 space-x-4">
          <a href="#" className="text-blue-400">
            <img
              src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737744216/media_social_twitter_icon_124253_czpvfb.png"
              alt="Twitter icon"
              className="w-10 h-10"
            />
          </a>
          <a href="#" className="text-blue-700">
            <img
              src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737744215/in_linked_linkedin_media_social_icon_124259_hbjuko.png"
              alt="LinkedIn icon"
              className="w-10 h-10"
            />
          </a>
          <a href="#" className="text-blue-600">
            <img
              src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737744215/facebook_logo_icon_147291_tistb3.png   "
              alt="Facebook icon"
              className="w-10 h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default App;
