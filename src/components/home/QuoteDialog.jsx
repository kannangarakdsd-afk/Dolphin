import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Upload } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';

import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { toast } from 'sonner';
import { HomeButton } from './HomeButton';

export function QuoteDialog({ open, onOpenChange }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  const onSubmit = (data) => {
    console.log('Quote request:', data, 'File:', selectedFile);
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border rounded-lg p-6">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a detailed quote.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                {...register('name', { required: 'Name is required' })}
                placeholder="John Doe"
              />
              {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
            </div>

            <div>
              <Label htmlFor="businessName">Business Name</Label>
              <Input
                id="businessName"
                {...register('businessName')}
                placeholder="Your Company Ltd"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactNumber">Contact Number *</Label>
              <Input
                id="contactNumber"
                {...register('contactNumber', { required: 'Contact number is required' })}
                placeholder="0712345678"
              />
              {errors.contactNumber && <span className="text-sm text-red-500">{errors.contactNumber.message}</span>}
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="material">Material</Label>
              <Select onValueChange={(value) => setValue('material', value)}>
                <SelectTrigger>
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
              <Label htmlFor="size">Size/Dimensions</Label>
              <Input
                id="size"
                {...register('size')}
                placeholder="e.g., 10ft x 6ft"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="color">Powder Coating Color</Label>
              <Select onValueChange={(value) => setValue('color', value)}>
                <SelectTrigger>
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
              <Label htmlFor="finish">Finish Type</Label>
              <Select onValueChange={(value) => setValue('finish', value)}>
                <SelectTrigger>
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

          <div>
            <Label htmlFor="message">Additional Details</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Please provide any additional information about your project..."
              rows={4}
            />
          </div>

          <div>
            <Label htmlFor="file">Upload Drawings/Photos</Label>
            <div className="mt-2">
              <label
                htmlFor="file"
                className="flex items-center justify-center w-full h-32 px-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#007BFF] transition-colors"
              >
                <div className="text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
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

          <div className="flex justify-end space-x-3 pt-4">
            <HomeButton type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </HomeButton>
            <HomeButton type="submit" className="bg-[#007BFF] hover:bg-blue-600">
              Submit Quote Request
            </HomeButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
