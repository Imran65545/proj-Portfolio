import React from 'react';
import { ExternalLink, Github, Code, Database, Globe, Zap, Server } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Artistly',
      description: 'A performing artist booking platform with modern UI, dynamic routing, and responsive design. Built for smooth booking experience with mock data integration.',
      image: '/Artistly.png',
      tech: ['Next.js', 'Tailwind CSS', 'React', 'ShadCN UI'],
      liveUrl: 'https://proj-artistly.vercel.app',
      githubUrl: 'https://github.com/Imran65545/Artistly',
      featured: true
    },
    {
      title: 'WeChat - Real-Time Chat App',
      description: 'A real-time chat application using WebSockets, supporting instant messaging and multi-user rooms with smooth frontend and backend communication.',
      image: '/WeChat.png',
      tech: ['React', 'Node.js', 'Socket.io', 'Express'],
      liveUrl: 'https://imran65545.github.io/WeChat/',
      githubUrl: 'https://github.com/Imran65545/WeChat',
      featured: true
    },
    {
      title: 'Solar System 3D Simulation',
      description: 'Interactive 3D visualization of the solar system with realistic physics, orbit controls, and adjustable simulation speed.',
      image: 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Three.js', 'JavaScript', 'WebGL', 'CSS3'],
      liveUrl: 'https://imran65545.github.io/proj-solar/',
      githubUrl: 'https://github.com/Imran65545/proj-solar',
      featured: true
    },
    {
      title: 'VS Code AI Assistant Extension',
      description: 'AI-powered code assistant extension that provides intelligent code suggestions, explanations, and optimization tips.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'TypeScript', 'Gemini API', 'VS Code API'],
      liveUrl: 'https://github.com/Imran65545/Vschat',
      githubUrl: 'https://github.com/Imran65545/Vschat',
      featured: true
    }
  ];

  const getTechIcon = (tech: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      'React': Code,
      'Next.js': Globe,
      'Node.js': Server,
      'MongoDB': Database,
      'Three.js': Zap,
      'JavaScript': Code,
      'TypeScript': Code,
      'Tailwind CSS': Globe,
      'Socket.io': Zap,
      'WebGL': Zap,
      'CSS3': Globe,
      'Gemini API': Zap,
      'VS Code API': Code,
      'Contentful': Database
    };
    return icons[tech] || Code;
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-emerald-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, 
            interactive experiences, and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 
                       hover:border-emerald-500 transition-all duration-300 transform hover:scale-105 
                       hover:shadow-2xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => {
                    const IconComponent = getTechIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        <IconComponent size={14} />
                        {tech}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-pink-500 
                             text-white rounded-lg hover:from-emerald-600 hover:to-pink-600 
                             transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 
                             rounded-lg hover:border-emerald-500 hover:text-emerald-400 
                             transition-all duration-300 transform hover:scale-105"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;