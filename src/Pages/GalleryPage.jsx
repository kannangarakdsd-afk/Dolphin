import React, { useState, useEffect } from 'react'
import ProjectCard from '../components/gallery/ProjectCard'
import ProjectModal from '../components/gallery/ProjectModal'

// Sample Data Array
const projectsData = [
  { id: 1, title: "Modern Gate Installation", category: "Gates", description: "Custom designed modern gate with powder coating finish", before: "https://via.placeholder.com/400x300", after: "https://via.placeholder.com/400x300" },
  { id: 2, title: "Industrial Fencing", category: "Fencing", description: "Heavy-duty industrial fencing with anti-corrosion coating", before: "https://via.placeholder.com/400x300", after: "https://via.placeholder.com/400x300" },
  { id: 3, title: "Industrial Parts", category: "Industrial Parts", description: "Powder coated industrial components for machinery", before: "https://via.placeholder.com/400x300", after: "https://via.placeholder.com/400x300" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect for the skeleton check
  
    

  const categories = ['All Projects', 'Gates', 'Fencing', 'Industrial Parts'];

  const filteredProjects = filter === 'All Projects' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            Project Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects showcasing our expertise in powder coating and iron works.
          </p>
        </div>

        {/* Updated Filters with State */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((label) => (
            <button
              key={label}
              onClick={() => setFilter(label)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                filter === label 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title} 
              description={project.description} 
              imageSrc={project.after}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Modal Logic */}
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </div>
  )
}