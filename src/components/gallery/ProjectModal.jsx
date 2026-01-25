import React from 'react'

export default function ProjectModal({ project, onClose }) {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full 
                   max-h-[90vh] overflow-y-auto relative 
                   animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Close Button - Sticky ensures it stays at the top while scrolling */}
        <div className="sticky top-0 right-0 flex justify-end p-4 bg-white/80 backdrop-blur-md z-30">
          <button 
            onClick={onClose}
            className="p-2 rounded-full border border-gray-200 text-gray-500 hover:text-black hover:bg-gray-100 transition-all"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-8 md:px-10 md:pb-10">
          {/* Header - text-balance prevents awkward mid-word cuts */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pr-8 text-balance leading-tight">
            {project.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Before</span>
              <div className="aspect-video md:aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <img src={project.before} className="w-full h-full object-cover" alt="Before" />
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">After</span>
              <div className="aspect-video md:aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                <img src={project.after} className="w-full h-full object-cover" alt="After" />
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed border-t pt-6">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
