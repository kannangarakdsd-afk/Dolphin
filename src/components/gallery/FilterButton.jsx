import React from 'react'

export default function FilterButton({ label, isActive = false }) {
  return (
    <button
    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive 
        ? 'bg-blue-600 text-white' 
        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
    }`}
  >
    {label}
  </button>
  )
}
