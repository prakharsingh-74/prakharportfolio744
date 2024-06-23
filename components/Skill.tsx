import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'React js & Next js', level: 80 },
  { name: 'Javascript & Typescript', level: 85 },
  { name: 'Figma & Premiere Pro', level: 80 },
  { name: 'Version Control', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Drone Building and Troubleshooting', level: 79 },
];

const experiences: Experience[] = [
  {
    company: 'Drone Club AKGEC',
    role: 'Technical Assistant',
    duration: 'Oct 2023 - Present',
    description: 'Designed different drones and taught my juniors about the drone and its manufacturing.'
  },
  {
    company: 'Machine Learning Center of Excellence',
    role: 'ML Developer',
    duration: 'Oct 2023 - Dec 2023',
    description: 'During my tenure, I had the privilege to work alongside with my seniors, delving into the heart of innovative projects that leveraged data-driven insights and AI solutions.'
  },
];

const Skills: React.FC = () => {
  return (
    <div className="bg-[#09101a] py-12">
      <div className="w-[80%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Experiences <span className='text-yellow-400'>& Skills</span></h1>
        
        {/* Experiences Section */}
        <div data-aos="flip-left" data-aos-delay="250" className="mb-12">
          <h2 className="text-2xl font-semibold text-[#55e6a5] mb-4 text-center">Experiences</h2>
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white">{experience.company}</h3>
                <p className="text-yellow-400">{experience.role}</p>
                <p className="text-gray-400">{experience.duration}</p>
                <p className="text-gray-300 mt-2">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills Section */}
        <div data-aos="flip-right" data-aos-delay="250">
          <h2 className="text-2xl font-semibold text-[#55e6a5] mb-4 text-center">Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index} className="w-full bg-gray-700 rounded-full h-8 overflow-hidden">
                <div
                  className="bg-[#55e6a5] h-full flex items-center justify-center"
                  style={{ width: `${skill.level}%` }}
                >
                  <span className="text-black font-bold ml-2">{skill.name} - {skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
