import React from 'react'

export default function ProjectModal({ project, onClose }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden relative animate-in zoom-in-90 slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-gray-100 text-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all z-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{project.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Before</span>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm">
                <img src={project.before} className="w-full h-full object-cover" alt="Before" />
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">After</span>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm">
                <img src={project.after} className="w-full h-full object-cover" alt="After" />
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed border-t pt-6">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
