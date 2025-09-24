import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import ImageGallery from './ImageGallery';

const Projects = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<{images: string[], title: string}>({images: [], title: ''});

  const projects = [
    {
      id: 1,
      title: "Foodify - Food Delivery App",
      description: "Foodify :- Bringing taste to your doorstep delivery app - click eye icon to view screenshots",
      image: "/images/food_app1.jpg",
      technologies: ["React Native", "Firebase", "Node.js", "Express.js"],
      liveLink: "#",
      githubLink: "https://github.com/afifahusna2024",
      featured: true,
      hasGallery: true,
      showAsText: true,
      galleryImages: [
        "/images/food_app1.jpg",
        "/images/food_app2.jpg",
        "/images/food_app3.jpg",
        "/images/food_app4.jpg",
        "/images/food_app5.jpg",
        "/images/food_app6.jpg",
        "/images/food_app7.jpg",
        "/images/food_app8.jpg",
        "/images/food_app9.jpg",
        "/images/food_app10.jpg",
        "/images/food_app11.jpg",
        "/images/food_app12.jpg",
        "/images/food_app13.jpg",
        "/images/food_app14.jpg",
        "/images/food_app15.jpg"
      ]
    },
    {
      id: 2,
      title: "Manager Web Dashboard",
      description: "Manager Web :- Comprehensive business operations dashboard - click to view screenshots",
      image: "/images/manager_web1.png",
      technologies: ["React", "TypeScript", "Chart.js", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com/afifahusna2024",
      featured: true,
      hasGallery: true,
      showAsText: true,
      galleryImages: [
        "/images/manager_web1.png",
        "/images/manager_web2.png",
        "/images/manager_web3.png",
        "/images/manager_web4.png",
        "/images/manager_web5.png",
        "/images/manager_web6.png",
        "/images/manager_web7.png"
      ]
    },
    {
      id: 3,
      title: "Delivery Management App",
      description: "Delivery Management :- Efficient tracking and route optimization system - click to view screenshots",
      image: "/images/delivery_app1.jpg",
      technologies: ["React Native", "MongoDB", "Node.js", "Socket.io"],
      liveLink: "#",
      githubLink: "https://github.com/afifahusna2024",
      featured: true,
      hasGallery: true,
      showAsText: true,
      galleryImages: [
        "/images/delivery_app1.jpg",
        "/images/delivery_app2.jpg",
        "/images/delivery_app3.jpg",
        "/images/delivery_app4.jpg",
        "/images/delivery_app5.jpg"
      ]
    },
    {
      id: 4,
      title: "Mobile Expense Tracker",
      description: "A full-stack mobile expense tracking application with user authentication and data visualization.",
      image: "/My App UI pics.jpg",
      technologies: ["React Native", "Node.js", "Express.js", "React.js"],
      liveLink: "#",
      githubLink: "https://github.com/afifahusna2024",
      featured: true,
      hasGallery: false
    },
    {
      id: 5,
      title: "Currency Converter",
      description: "A real-time currency conversion application with a sleek user interface and accurate exchange rates.",
      image: "/image.png",
      technologies: ["Api", "JS", "CSS", "HTML", "Fetch API"],
      liveLink: "#",
      githubLink: "https://github.com/afifahusna2024",
      featured: true,
      hasGallery: false
    },
    {
      id: 6,
      title: "Full-Stack JN Academy Project",
      description: "A website for JN Academy, showcasing its courses and faculty.",
      image: "/my_JN_website.jpg",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveLink: "#",
      githubLink: "https://github.com/afifahusna2024",
      featured: false,
      hasGallery: false
    }
  ];

  const openGallery = (images: string[], title: string) => {
    setCurrentGallery({ images, title });
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setCurrentGallery({ images: [], title: '' });
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-purple-950 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                project.featured ? 'lg:col-span-1 md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                {project.showAsText ? (
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 flex items-center justify-center border border-purple-500/30">
                    <div className="text-center p-6">
                      {/* <div className="text-4xl mb-2"></div> */}
                      <div className="text-white font-semibold text-lg mb-1">{project.title}</div>
                      <div className="text-purple-300 text-sm">Click eye icon to view screenshots</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.hasGallery && (
                    <button
                      onClick={() => openGallery(project.galleryImages || [], project.title)}
                      className="bg-indigo-600 hover:bg-indigo-700 p-2 rounded-full transition-colors"
                      title={`View ${project.title} screenshots`}
                    >
                      <Eye size={16} className="text-white" />
                    </button>
                  )}
                  <a
                    href={project.liveLink}
                    className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${project.title} live demo`}
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${project.title} source code`}
                  >
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            View All Projects
          </button>
        </div>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        images={currentGallery.images}
        isOpen={galleryOpen}
        onClose={closeGallery}
        title={currentGallery.title}
      />
    </section>
  );
};

export default Projects;