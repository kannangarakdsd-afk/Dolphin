import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/facilities/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/facilities/accordion';
import { Check } from 'lucide-react';
import { ImageWithFallback } from '../components/SafeImage/ImageWithFallback';

export default function FacilitiesPage() {
  const powderCoatingColors = [
    'Black', 'White', 'Gray', 'Silver', 'Blue', 'Green', 'Red', 'Yellow', 'Bronze', 'Custom Colors'
  ];

  const powderCoatingFinishes = [
    { name: 'Matte Finish', description: 'Non-reflective, smooth finish ideal for modern aesthetics' },
    { name: 'Gloss Finish', description: 'High-shine, reflective finish for premium appearance' },
    { name: 'Semi-Gloss', description: 'Balanced finish with moderate shine' },
    { name: 'Textured Finish', description: 'Rough surface for enhanced grip and unique appearance' },
    { name: 'Metallic Finish', description: 'Sparkle effect for decorative applications' },
  ];

  const ironWorksServices = [
    {
      title: 'Custom Gate Design',
      features: ['Sliding gates', 'Swing gates', 'Automated systems', 'Decorative elements'],
    },
    {
      title: 'Fencing Solutions',
      features: ['Perimeter fencing', 'Security fencing', 'Decorative fencing', 'Pool fencing'],
    },
    {
      title: 'Structural Iron Works',
      features: ['Staircases', 'Railings', 'Balconies', 'Canopies'],
    },
    {
      title: 'Industrial Fabrication',
      features: ['Machine parts', 'Support structures', 'Custom components', 'Assembly services'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=1920')`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl mb-4">Our Facilities</h1>
          <p className="text-xl">State-of-the-Art Equipment & Expert Craftsmanship</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="powder-coating" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="powder-coating">Powder Coating</TabsTrigger>
              <TabsTrigger value="iron-works">Iron Works</TabsTrigger>
            </TabsList>

            <TabsContent value="powder-coating" className="space-y-8">
              {/* Powder Coating Overview */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <h2 className="text-2xl mb-4">Powder Coating Services</h2>
                    <p className="text-gray-600 mb-6">
                      Our advanced powder coating facility offers superior finish quality with
                      excellent durability and corrosion resistance. We use industry-leading
                      equipment to ensure consistent, high-quality results.
                    </p>
                    <h3 className="mb-3">Benefits:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Superior durability and scratch resistance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Excellent corrosion and weather resistance</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Environmentally friendly process</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Wide range of colors and finishes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">UV protection and color stability</span>
                      </li>
                    </ul>
                  </div>
                  <div className="h-96 md:h-auto">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=800"
                      alt="Powder Coating Facility"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Available Colors */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-6">Available Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {powderCoatingColors.map((color, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
                      <span>{color}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  * Custom colors available upon request with RAL/Pantone matching
                </p>
              </div>

              {/* Finish Types */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-6">Finish Types</h3>
                <Accordion type="single" collapsible className="w-full">
                  {powderCoatingFinishes.map((finish, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">{finish.name}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">{finish.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            
            </TabsContent>

            <TabsContent value="iron-works" className="space-y-8">
              {/* Iron Works Overview */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-96 md:h-auto order-2 md:order-1">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1759493464642-4e66d700fb77?w=800"
                      alt="Iron Works"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 order-1 md:order-2">
                    <h2 className="text-2xl mb-4">Iron Works & Fabrication</h2>
                    <p className="text-gray-600 mb-6">
                      Our skilled craftsmen combine traditional techniques with modern fabrication
                      methods to create custom iron works that meet your exact specifications. All
                      iron works can be finished with our premium powder coating service.
                    </p>
                    <h3 className="mb-3">Capabilities:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Custom design and engineering</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Precision cutting and welding</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">CNC machining and forming</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">On-site installation services</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">Quality assurance and testing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ironWorksServices.map((service, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl mb-4 text-[#007BFF]">{service.title}</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-[#007BFF] mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Powder Coating Options */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-4">Powder Coating Options for Iron Works</h3>
                <p className="text-gray-600 mb-6">
                  All our iron works can be finished with our premium powder coating service, providing
                  superior protection and aesthetic appeal. Choose from our wide range of colors and
                  finishes to match your specific requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="mb-2">Standard Colors</h4>
                    <p className="text-sm text-gray-600">Popular colors in stock for quick turnaround</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="mb-2">Custom Matching</h4>
                    <p className="text-sm text-gray-600">RAL/Pantone color matching available</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="mb-2">Special Finishes</h4>
                    <p className="text-sm text-gray-600">Metallic, textured, and custom effects</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
