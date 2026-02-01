import { useState } from 'react';
import { ArrowRight, CheckCircle, Sparkles} from 'lucide-react';

import { QuoteDialog } from '../components/home/QuoteDialog';
import { ImageWithFallback } from '../components/SafeImage/ImageWithFallback';
import { HomeButton } from '../components/home/HomeButton';
import { motion } from 'motion/react';

export default function Home() {
  const [showQuote, setShowQuote] = useState(false);

  const features = [
    'High-Quality Powder Coating',
    'Custom Iron Works & Fabrication',
    'Gates & Fencing Solutions',
    'Industrial Parts Manufacturing',
    'ISO Certified Processes',
    'Expert Craftsmanship',
  ];

  const services = [
    {
      title: 'Powder Coating',
      description: 'Durable, high-quality finishes in a wide range of colors and textures.',
      image: 'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dkZXIlMjBjb2F0aW5nJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3Njc0MTIxMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Iron Works',
      description: 'Precision metal fabrication and iron works for industrial and decorative applications.',
      image: 'https://images.unsplash.com/photo-1759493464642-4e66d700fb77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcm9uJTIwd29ya3MlMjBtZXRhbHxlbnwxfHx8fDE3Njc0MTIxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div>
      {/* Admin Login Button - Hidden in corner */}
      <div className="fixed bottom-4 left-4 z-50">
        <a
          href="/admin"
          className="opacity-10 hover:opacity-100 transition-opacity duration-300"
        >
          <div className="h-3 w-3 rounded-full bg-gray-400" />
        </a>
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmd8ZW58MXx8fHwxNzY3NDEyMTMzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Dolphin Engineers PVT LTD
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium Powder Coating & Iron Works Solutions
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HomeButton
              size="lg"
              className="bg-gradient-to-r from-[#007BFF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group"
              onClick={() => setShowQuote(true)}
            >
              <Sparkles className="mr-2 h-6 w-6 animate-pulse" />
              Request a Quote 
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </HomeButton>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Welcome to Dolphin Engineers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Based in Sri Lanka, we specialize in powder coating and iron works for gates, fencing,
              and industrial parts. Our commitment to quality and excellence has made us a trusted
              partner for residential and commercial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-6 w-6 text-[#007BFF] flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-[#007BFF] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl mb-2">Address</h3>
              <p className="text-blue-100">No: 158/4/1, Honnanthara North, Piliyandala</p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Email</h3>
              <a href="mailto:dophineng9@gmail.com" className="text-blue-100 hover:text-white">
                dophineng9@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-xl mb-2">Phone</h3>
              <p className="text-blue-100">
                0112601414<br />
                0714428059 (Hotline)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with us today for a free consultation and quote.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HomeButton
              size="lg"
              className="bg-gradient-to-r from-[#007BFF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group"
              onClick={() => setShowQuote(true)}
            >
              <Sparkles className="mr-2 h-6 w-6 animate-pulse" />
              Request a Quote 
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </HomeButton>
          </motion.div>
        </div>
      </section>

      <QuoteDialog open={showQuote} onOpenChange={setShowQuote} />
    </div>
  );
}