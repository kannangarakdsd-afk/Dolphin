import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload, Sparkles, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { motion } from 'motion/react';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { toast } from 'sonner';
import { HomeButton } from './HomeButton';

export function QuoteDialog({ open, onOpenChange, generatedImage }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const onSubmit = (data) => {
    // Save quote to localStorage
    const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
    const newQuote = {
      id: Date.now(),
      ...data,
      fileName: selectedFile?.name,
      generatedImage: generatedImage || null,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };
    quotes.push(newQuote);
    localStorage.setItem('quotes', JSON.stringify(quotes));
    
    console.log('Quote request:', newQuote);
    toast.success('Quote request submitted successfully! We will contact you soon.');
    reset();
    setSelectedFile(null);
    onOpenChange(false);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="space-y-3 pb-6 border-b border-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#007BFF] to-blue-600 flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
            <DialogTitle className="text-3xl text-center bg-gradient-to-r from-[#007BFF] to-blue-600 bg-clip-text text-transparent">
              Request a Quote
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Fill out the form below and we'll get back to you with a detailed quote within 24 hours.
            </DialogDescription>
          </DialogHeader>

          {/* AI Generator Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 shadow-sm"
          >
            <div className="flex items-start space-x-3">
              <Sparkles className="h-5 w-5 text-[#007BFF] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Need help visualizing your project?</p>
                <p className="text-sm text-gray-600 mt-1">
                  Visit our{' '}
                  <a
                    href="/facilities"
                    className="text-[#007BFF] hover:text-blue-700 font-semibold underline decoration-2 underline-offset-2"
                    onClick={() => onOpenChange(false)}
                  >
                    AI 3D Image Generator
                  </a>
                  {' '}to create design mockups of your iron works, then upload them here!
                </p>
              </div>
            </div>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
            {/* Personal Information Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <span className="h-8 w-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center text-sm">1</span>
                <span>Personal Information</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-10">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Your Name *</Label>
                  <Input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="John Doe"
                    className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                  />
                  {errors.name && <span className="text-sm text-red-500 mt-1">{errors.name.message}</span>}
                </div>

                <div>
                  <Label htmlFor="businessName" className="text-gray-700 font-medium">Business Name</Label>
                  <Input
                    id="businessName"
                    {...register('businessName')}
                    placeholder="Your Company Ltd"
                    className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                  />
                </div>

                <div>
                  <Label htmlFor="contactNumber" className="text-gray-700 font-medium">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    {...register('contactNumber', { required: 'Contact number is required' })}
                    placeholder="0712345678"
                    className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                  />
                  {errors.contactNumber && <span className="text-sm text-red-500 mt-1">{errors.contactNumber.message}</span>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                    placeholder="john@example.com"
                    className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                  />
                  {errors.email && <span className="text-sm text-red-500 mt-1">{errors.email.message}</span>}
                </div>
              </div>
            </motion.div>

            {/* Project Details Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <span className="h-8 w-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center text-sm">2</span>
                <span>Project Details</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-10">
                <div>
                  <Label htmlFor="material" className="text-gray-700 font-medium">Material</Label>
                  <Select onValueChange={(value) => setValue('material', value)}>
                    <SelectTrigger className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="steel">Steel</SelectItem>
                      <SelectItem value="aluminum">Aluminum</SelectItem>
                      <SelectItem value="iron">Iron</SelectItem>
                      <SelectItem value="stainless-steel">Stainless Steel</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="size" className="text-gray-700 font-medium">Size/Dimensions</Label>
                  <Input
                    id="size"
                    {...register('size')}
                    placeholder="e.g., 10ft x 6ft"
                    className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                  />
                </div>

                <div>
                  <Label htmlFor="color" className="text-gray-700 font-medium">Powder Coating Color</Label>
                  <Select onValueChange={(value) => setValue('color', value)}>
                    <SelectTrigger className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="white">White</SelectItem>
                      <SelectItem value="gray">Gray</SelectItem>
                      <SelectItem value="silver">Silver</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="custom">Custom Color</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="finish" className="text-gray-700 font-medium">Finish Type</Label>
                  <Select onValueChange={(value) => setValue('finish', value)}>
                    <SelectTrigger className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]">
                      <SelectValue placeholder="Select finish" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matte">Matte</SelectItem>
                      <SelectItem value="gloss">Gloss</SelectItem>
                      <SelectItem value="semi-gloss">Semi-Gloss</SelectItem>
                      <SelectItem value="textured">Textured</SelectItem>
                      <SelectItem value="metallic">Metallic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </motion.div>

            {/* Additional Information Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <span className="h-8 w-8 rounded-full bg-[#007BFF] text-white flex items-center justify-center text-sm">3</span>
                <span>Additional Information</span>
              </h3>
              <div className="space-y-4 pl-10">
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Additional Details</Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    placeholder="Please provide any additional information about your project..."
                    rows={4}
                    className="mt-1.5 border-gray-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                  />
                </div>

                <div>
                  <Label htmlFor="file" className="text-gray-700 font-medium">Upload Drawings/Photos</Label>
                  <div className="mt-2">
                    <label
                      htmlFor="file"
                      className="group flex items-center justify-center w-full h-32 px-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#007BFF] hover:bg-blue-50/50 transition-all duration-200"
                    >
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-[#007BFF] transition-colors" />
                        <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-900">
                          {selectedFile ? (
                            <span className="font-medium text-[#007BFF]">{selectedFile.name}</span>
                          ) : (
                            'Click to upload or drag and drop'
                          )}
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                      </div>
                      <input
                        id="file"
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex justify-end space-x-3 pt-6 border-t border-gray-200"
            >
              <HomeButton type="button" variant="outline" onClick={() => onOpenChange(false)} className="px-6">
                Cancel
              </HomeButton>
              <HomeButton 
                type="submit" 
                className="px-8 bg-gradient-to-r from-[#007BFF] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                Submit Quote Request
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </HomeButton>
            </motion.div>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}