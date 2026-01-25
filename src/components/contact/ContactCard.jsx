import React from 'react'

export default function ContactCard({ icon: Icon, title, content}) {
 
    // if (isLoading) return <div className="h-32 w-full bg-gray-200 animate-pulse rounded-lg" />;
  
  return (
    <div className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-50 rounded-full mb-4">
        <Icon className="text-blue-600 w-6 h-6" />
      </div>
      <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
      <div className="text-center text-gray-500 text-sm whitespace-pre-line">
        {content}
      </div>
    </div>
  )
}
