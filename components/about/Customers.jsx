import React from 'react';

const Customers = () => {
  return (
    <div className="relative bg-cover bg-center min-h-[75vh] p-8" style={{ backgroundImage: "url('https://res.cloudinary.com/dacpiss4b/image/upload/v1737742576/beach-7608602_640_oe78s2.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[75vh] text-white">
        <h2 className="text-3xl font-bold mb-4">WORDS FROM OUR CUSTOMERS</h2>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-lg mx-auto text-center">
          <p className="mb-4">
            The photos tell the story and bring back every feeling from our wedding day and we look at them feeling laughter and tears. "If you are looking for a wedding photographer then look no further than FineTake studio. They were absolutely brilliant from start to finish. Professional, efficient, friendly and, most importantly, took the most fabulous photographs of our wedding, in challenging weather conditions."
          </p>
          <div className="flex items-center justify-center">
            <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://res.cloudinary.com/dacpiss4b/image/upload/v1737282156/DSC_0132_dfvnes.jpg" alt="John Doe" />
            </div>
            <div className="ml-4 text-center">
              <div className="text-sm font-medium">JOHN DOE</div>
              <div className="flex mt-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
