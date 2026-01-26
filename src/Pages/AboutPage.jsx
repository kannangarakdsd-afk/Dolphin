import { Award, Target, Eye, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/SafeImage/ImageWithFallback';

export default function AboutPage() {
  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'Safety Compliance', description: 'Workplace Safety Standards' },
    { name: 'Environmental Standards', description: 'Eco-Friendly Practices' },
  ];

  const clients = [
    'Sri Lankan Government',
    'Private Corporations',
    'Construction Companies',
    'Manufacturing Industries',
    'Residential Developers',
    'Commercial Enterprises',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=1920')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl mb-4">About Us</h1>
          <p className="text-xl">Excellence in Engineering Since Inception</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Dolphin Engineers PVT LTD has been at the forefront of powder coating and iron works
                in Sri Lanka, delivering exceptional quality and craftsmanship to our clients.
              </p>
              <p className="text-gray-600 mb-4">
                Founded with a vision to provide world-class engineering solutions, we have grown to
                become a trusted name in the industry. Our commitment to quality, innovation, and
                customer satisfaction has enabled us to successfully complete numerous projects across
                residential, commercial, and industrial sectors.
              </p>
              <p className="text-gray-600">
                We combine traditional craftsmanship with modern technology to deliver products that
                not only meet but exceed our clients' expectations.
              </p>
            </div>
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764114441097-6a475eca993d?w=800"
                alt="Workshop"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Eye className="h-12 w-12 text-[#007BFF] mb-4" />
              <h3 className="text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of powder coating and iron works solutions in Sri Lanka,
                recognized for our quality, innovation, and commitment to excellence. We strive to
                set industry standards and continuously evolve to meet the changing needs of our
                clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="h-12 w-12 text-[#007BFF] mb-4" />
              <h3 className="text-2xl mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver superior quality products and services through skilled craftsmanship,
                advanced technology, and sustainable practices. We are committed to building
                long-lasting relationships with our clients by consistently exceeding their
                expectations and providing exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <Award className="h-16 w-16 text-[#007BFF] mx-auto mb-4" />
                <h3 className="text-xl mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Brands */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="h-16 w-16 text-[#007BFF] mx-auto mb-4" />
            <h2 className="text-3xl mb-4">Our Clients</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud to serve a diverse range of clients across various sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition-shadow">
                <p className="text-sm">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

