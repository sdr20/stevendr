import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/src/assets/steven1-.png"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-600 mb-6">
            I'm a passionate junior front-end developer and app developer specializing in creating modern web and mobile applications. I focus on React and Node.js for web development, Flutter for cross-platform mobile apps, and leveraging cloud technologies to build responsive and user-friendly solutions. My dedication to delivering seamless user experiences drives my approach to development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold mb-2">Location</h3>
                <p className="text-gray-600">Zamboanga City</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Experience</h3>
                <p className="text-gray-600">Junior Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;