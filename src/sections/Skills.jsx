import { skills } from '../constants/index.js';

const Skills = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">My Technical Skills</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={`skill-${skill.id}`} className="bg-gray-800 p-6 rounded-2xl shadow-md">
            <h4 className="text-white font-semibold text-lg">{skill.name}</h4>
            <p className="text-white-500 font-light mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
