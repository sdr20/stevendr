import React from 'react';
import { FaGithub, FaMobile, FaDesktop, FaComments, FaChartLine } from 'react-icons/fa';

const ProjectCard = ({ title, category, description, image, githubLink, icon: Icon }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
    <div className="relative group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:opacity-75 transition-opacity"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-700"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <Icon className="text-blue-600 text-xl" />
      </div>
      <p className="text-gray-600 text-sm mb-2">{category}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Portfolio = () => {
  const projects = [
    {
      title: 'EggCubator App',
      category: 'IoT & Mobile Development',
      description: 'An IoT-based Egg incubator with a Mobile Application for monitoring and control.',
      image: '/src/assets/playstore.png',
      githubLink: 'https://github.com/sdr20/eggcuabtorfirebase',
      icon: FaMobile
    },
    {
      title: 'Home Automation Basic Flutter App',
      category: 'IoT & Mobile Development',
      description: 'An IoT-based Home Automation with a Mobile Application for monitoring and control.',
      image: 'https://via.placeholder.com/400x300',
      githubLink: 'https://github.com/sdr20/Home-Automation',
      icon: FaMobile
    },
    {
      title: 'React Chat App',
      category: 'Web Development',
      description: 'Real-time chat application built with React.js and Firebase.',
      image: 'https://via.placeholder.com/400x300',
      githubLink: 'https://github.com/yourusername/react-chat',
      icon: FaComments
    },
    {
      title: 'MINE Financial Tracking App',
      category: 'Application Development',
      description: 'Personal finance management application for tracking expenses and investments.',
      image: 'https://via.placeholder.com/400x300',
      githubLink: 'https://github.com/yourusername/mine-finance',
      icon: FaChartLine
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;