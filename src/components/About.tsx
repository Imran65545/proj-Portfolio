import { Code, Database, Globe,  Server, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, description: 'React, Next.js, TypeScript, Tailwind CSS' },
    { name: 'Backend', icon: Server, description: 'Node.js, Express, Python, REST APIs' },
    { name: 'Database', icon: Database, description: 'MongoDB, PostgreSQL, MySQL' },
    { name: 'DevOps', icon: Zap, description: 'AWS, Docker, CI/CD, Git' },
    { name: 'Tools', icon: Code, description: 'VS Code, Figma, Postman' }
  ];


  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-emerald-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with 3+ years of experience creating 
            innovative web solutions and user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a dedicated full-stack developer who loves turning complex problems 
              into simple, beautiful solutions. My journey in web development started 
              with curiosity about how websites work, and it has evolved into a passion 
              for creating seamless digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community. I believe in writing clean, maintainable code 
              and staying up-to-date with the latest industry trends.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-emerald-500 
                         transition-all duration-300 transform hover:scale-105"
              >
                <skill.icon className="text-emerald-400 mb-3" size={32} />
                <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;