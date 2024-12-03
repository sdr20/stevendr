import React from 'react';
import { FaGraduationCap, FaBriefcase, FaMicrochip, FaMobile, FaPaintBrush } from 'react-icons/fa';

const ExperienceCard = ({ year, title, company, description, icon }) => (
  <div className="mb-8 relative pl-8">
    <div className="absolute left-0 top-0 text-blue-600">
      {icon}
    </div>
    <div className="text-sm text-gray-500 mb-1">{year}</div>
    <h4 className="text-xl font-bold mb-2">{title}</h4>
    <div className="text-gray-600 mb-2">{company}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Resume = () => {
  const experiences = [
    {
      year: '2022 - 2023',
      title: 'UI/UX Designer',
      company: 'Freelance',
      description: 'Specialized in creating intuitive and user-friendly interfaces for web and mobile applications. Focused on user research, wireframing, and prototyping to deliver exceptional user experiences.',
      icon: <FaPaintBrush className="text-2xl" />
    },
    {
      year: '2022 - 2023',
      title: 'Mobile App Developer',
      company: 'Flutter Projects',
      description: 'Developed cross-platform mobile applications using Flutter framework. Created responsive and performant applications with modern UI/UX design principles.',
      icon: <FaMobile className="text-2xl" />
    },
    {
      year: '2022 - 2023',
      title: 'IoT Developer',
      company: 'Personal Projects',
      description: 'Worked with ESP32 and Arduino platforms, implementing machine learning solutions for IoT devices. Developed embedded systems and smart device applications.',
      icon: <FaMicrochip className="text-2xl" />
    }
  ];

  const education = [
    {
      year: '2019 - 2023',
      degree: 'Bachelor of Information and Technology',
      school: 'Zamboanga Peninsula Polytechnic State University',
      capstone: 'EggCuvator: An IoT-based Egg incubator with a Mobile Application',
      icon: <FaGraduationCap className="text-2xl" />
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Resume</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaBriefcase className="mr-2" />
              Experience
            </h3>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaGraduationCap className="mr-2" />
              Education
            </h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-8 relative pl-8">
                <div className="absolute left-0 top-0 text-blue-600">
                  {edu.icon}
                </div>
                <div className="text-sm text-gray-500 mb-1">{edu.year}</div>
                <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                <div className="text-gray-600 mb-2">{edu.school}</div>
                <p className="text-gray-600">
                  <strong>Capstone Project:</strong> {edu.capstone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;