import React from 'react'
import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import ContactCard from '../components/contact/ContactCard';
import ContactForm from '../components/contact/ContactForm';

export default function ContactUsPage() {
 

  

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      {/* Header Banner */}
      <header className="bg-blue-600 text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-blue-100 text-sm">Get in touch with us for inquiries, quotes, or consultations</p>
      </header>

      <main className="max-w-6xl mx-auto mt-16 px-4  pb-20">
        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <ContactCard 
            
            icon={MapPin} 
            title="Visit Us" 
            content="No: 158/4/1, Honnanthara North, Piliyandala" 
          />
          <ContactCard 
            
            icon={Mail} 
            title="Email Us" 
            content="dophineng9@gmail.com" 
          />
          <ContactCard 
            
            icon={Phone} 
            title="Call Us" 
            content={"0112601414\n0714428059 (Hotline)"} 
          />
        </div>

        {/* Bottom Section: Form & Map/WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm  />
          
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4">Our Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with actual Google Maps Iframe */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">Map Interface</div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <MessageCircle className="text-green-500 w-10 h-10 mb-2" />
              <h3 className="font-bold mb-2">WhatsApp Us</h3>
              <div className="w-24 h-24 bg-gray-100 mb-2 rounded border flex items-center justify-center">
                <span className="text-[10px] text-gray-400">QR Code</span>
              </div>
              <p className="text-sm text-gray-500">Scan this QR code to start a WhatsApp conversation</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
