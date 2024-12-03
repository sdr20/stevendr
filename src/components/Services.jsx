import React from 'react';
import { FaCode, FaMobile, FaPaintBrush } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
    <div className="text-blue-600">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl mb-4" />,
      title: 'Web Development',
      description: 'Creating responsive and modern web applications using latest technologies',
    },
    {
      icon: <FaMobile className="text-4xl mb-4" />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications for iOS and Android',
    },
    {
      icon: <FaPaintBrush className="text-4xl mb-4" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive and beautiful user interfaces',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;