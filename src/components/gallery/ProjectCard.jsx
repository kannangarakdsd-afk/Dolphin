import React, { useState } from 'react'

export default function ProjectCard({ title, description, imageSrc,  onOpen }) {
  // Skeleton State
  const[ isLoading, setIsLoading ] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">
        <div className="h-64 w-full bg-gray-200" />
        <div className="p-6 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    );
  }

  // Active State
  return (
    <div 
      onClick={onOpen} // Trigger the modal on click
      className="group cursor-pointer bg-white rounded-xl max-w-80  shadow-sm overflow-hidden border border-gray-100 
                 transition-all duration-500 ease-out 
                 hover:-translate-y-4 hover:shadow-2xl 
                 animate-in fade-in slide-in-from-bottom-10 duration-700"
    >
      
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        {/* Before/After Badges */}
        <span className="z-10 absolute top-3 left-3 bg-black/80 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded">
          Before
        </span>
        <span className="z-10 absolute top-3 right-3 bg-blue-600 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded">
          After
        </span>
        
        {/* Image with Zoom Effect */}
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
