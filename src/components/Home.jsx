// import React from 'react';

// const Home = () => {
//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-4">Steven Dhaniel Ruelo</h1>
//         <p className="text-2xl text-gray-600 mb-8">Front End Developer and Application Developer</p>
//         <p className="text-lg text-gray-500 max-w-2xl mx-auto">
//         I'm a Junior Front-End Developer and App Developer specializing in creating visually engaging and user-friendly mobile applications using Flutter. With a strong foundation in Dart, UI/UX design principles, and cross-platform development, I craft modern, responsive, and high-performing apps. My problem-solving skills and attention to detail make me a dependable asset for building exceptional digital experiences.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from 'react';
import { FaCode, FaDatabase, FaCloud } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-gray-200 opacity-20 transform rotate-45">
          <FaCode size={100} />
        </div>
        <div className="absolute bottom-20 right-10 text-gray-200 opacity-20 transform -rotate-45">
          <FaDatabase size={100} />
        </div>
        <div className="absolute top-1/2 right-1/4 text-gray-200 opacity-20">
          <FaCloud size={80} />
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Steven Dhaniel Ruelo
          </h1>
          <p className="text-2xl text-gray-600 mb-8">Front End Developer and Application Developer</p>
          <p className="text-lg text-gray-500 max-w-2xl">
          I'm a Junior Front-End Developer and App Developer specializing in creating visually engaging and user-friendly mobile applications using Flutter. With a strong foundation in Dart, UI/UX design principles, and cross-platform development, I craft modern, responsive, and high-performing apps. My problem-solving skills and attention to detail make me a dependable asset for building exceptional digital experiences.
          </p>
          <div className="mt-8 space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              View Portfolio
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-colors">
              Contact Me
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            
            <img
              src="/src/assets/pic.png"
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
              <FaCode className="text-blue-600 text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;