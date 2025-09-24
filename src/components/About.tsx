import React from 'react';
import { Code, Palette, Zap, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "MERN Stack & Full-Stack Development",
      description: "Building complete web and mobile apps using React.js, Node.js, Express, and MongoDB — with clean, scalable code."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX & Mobile App Design",
      description: "Designing smooth, responsive interfaces with attention to detail — across web and React Native iOS/Android platforms."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance & Code Optimization",
      description: "Improving load times, responsiveness, and code efficiency for seamless user experiences on any device."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web & Mobile Technologies",
      description: "Skilled in JavaScript, TypeScript, PHP, SQL, REST APIs, and modern frameworks to bring powerful ideas to life."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Full-Stack Powerhouse with a Passion for Crafting Stunning Digital Experiences
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hey, I'm Afifa — a Full-Stack & MERN Stack Developer with a creative heart and a strong command over modern web and mobile technologies.
I bring together the power of frontend and backend, turning complex problems into smooth, user-friendly solutions.

I'm fluent in:
JavaScript, HTML, CSS, React.js, Node.js, Express.js, MongoDB, SQL, PHP, and I build fully functional cross-platform apps using React Native for both Android & iOS.

Whether it’s creating sleek interfaces, building RESTful APIs, or deploying real-world apps — I’m here to build experiences that not only work but wow.
From idea to execution, I give every pixel and line of code my full attention.
            </p>
            <div className="text-gray-300 text-lg leading-relaxed">
              <p className="mb-4">Hobbies & Beyond Code</p>
              <ul className="space-y-2 mb-4">
                <li>🌸 Designing creative UI ideas or exploring animation effects</li>
                <li>📱 Experimenting with new app ideas that solve real problems</li>
                <li>🧕 Deepening my Islamic knowledge and spirituality</li>
                <li>🎨 Playing with visuals, layouts, and colors (yes, purple is my favorite!)</li>
                <li>🍲 Cooking delicious Hyderabadi dishes — especially Biryani!</li>
                <li>🏖️ Taking peaceful walks or grabbing coffee by the beach</li>
              </ul>
              <p>These hobbies keep me inspired and balanced — and often give me my best app ideas 💡</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              {["JavaScript", "TypeScript", "CSS", "HTML", "SQL", "MongoDB", "React Native", "Node.js", "Express.js", "React.js", "PHP", "iOS/Android"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-3xl opacity-20" />
              <div className="absolute inset-4 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Code size={64} className="mx-auto mb-4 text-purple-400" />
                  <h4 className="text-xl font-semibold mb-2">Creative Developer</h4>
                  <p className="text-gray-300">Bringing ideas to life</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors">
                {skill.icon}
              </div>
              <h4 className="text-white font-semibold mb-3">{skill.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;