import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaFire, FaMobile, FaCode } from 'react-icons/fa';

const SkillCard = ({ icon, name, level }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center space-x-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact size={24} />, level: 90 },
    { name: 'HTML', icon: <FaHtml5 size={24} />, level: 95 },
    { name: 'CSS', icon: <FaCss3Alt size={24} />, level: 90 },
    { name: 'JavaScript', icon: <FaJs size={24} />, level: 85 },
    { name: 'MySQL', icon: <FaDatabase size={24} />, level: 75 },
    { name: 'Firebase', icon: <FaFire size={24} />, level: 80 },
    { name: 'Flutter', icon: <FaMobile size={24} />, level: 85 },
    { name: 'C++', icon: <FaCode size={24} />, level: 75 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="mb-12">
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
            With a strong foundation in UI/UX design and front-end development, I excel at creating 
            visually appealing and user-friendly interfaces. My expertise lies in crafting seamless 
            digital experiences that combine aesthetic excellence with practical functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;