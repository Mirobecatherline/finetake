import React from 'react';
import Navbar from '../../../components/about/Navbar';
import About from '../../../components/about/About';
import Services from '../../../components/about/Services'; // Importing the Services component
import Customers from '../../../components/about/Customers'; // Importing the Services component
import Writetous from '../../../components/about/Writetous'; // Importing the Services component
import Footer from '../../../components/about/Footer'; // Importing the Services component

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img 
          src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737389144/sunset-5344024_1280_uewdzt.jpg" 
          alt="Beautiful Rose"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 p-2 rounded">
          <h1 className="text-3xl font-bold">Fine Take Studio</h1>
          <p className="text-1xl">Capturing the beauty of nature in every shot.</p>
        </div>
      </div>
      <About /> {/* Adding the About component */}
      <Services /> {/* Adding the Services component */}
      <Customers /> {/* Adding the customers component */}
      <Writetous /> {/* Adding the customers component */}
      <Footer /> {/* Adding the customers component */}
    </div>
  );
}

export default HomePage;
