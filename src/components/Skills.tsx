

const skills = [
  { name: 'HTML5', color: 'text-orange-500' },
    { name: 'CSS3', color: 'text-blue-500' },
    { name: 'JavaScript', color: 'text-yellow-500' },
    { name: 'React', color: 'text-cyan-500' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'MongoDB', color: 'text-green-600' },
    { name: 'TypeScript', color: 'text-blue-600' },
    { name: 'Next.js', color: 'text-gray-300' },
    { name: 'Tailwind', color: 'text-teal-500' },
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'PostgreSQL', color: 'text-blue-400' },
    { name: 'AWS', color: 'text-orange-400' }
];

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800 border border-gray-700 shadow text-lg font-semibold ${skill.color}`}
          >
            {/* Icon placeholder */}
            <span className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mr-2">
              {/* Place your icon image here */}
            </span>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 