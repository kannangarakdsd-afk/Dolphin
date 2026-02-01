import { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';
import { HomeButton } from '../home/HomeButton';
import { Textarea } from '../home/textarea';
import { Card } from './card';
import { QuoteDialog } from '../home/QuoteDialog';
import { toast } from 'sonner';

export function AIImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  const examplePrompts = [
    'Modern iron table with geometric patterns and black powder coating',
    'Elegant outdoor chair with curved armrests and bronze finish',
    'Industrial style coffee table with metal frame and glass top',
    'Contemporary iron bench with decorative scrollwork',
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a description');
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation with a timeout
    setTimeout(() => {
      // Use placeholder image - in production, this would call an AI API
      setGeneratedImage('https://images.unsplash.com/photo-1759493464642-4e66d700fb77?w=600&h=600&fit=crop');
      setIsGenerating(false);
      toast.success('Image generated successfully!');
    }, 2000);
  };

  return (
    <div>
      <div className="text-center mb-12">
        <Sparkles className="h-16 w-16 text-[#007BFF] mx-auto mb-4" />
        <h2 className="text-3xl mb-4">AI 3D Image Generator</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Describe your ideal iron works project and let our AI generate a visual representation.
          Get instant design ideas for tables, chairs, and custom metalwork.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl mb-4">Describe Your Project</h3>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: A modern iron dining table with sleek legs and matte black powder coating finish..."
              rows={6}
              className="mb-4"
            />
            <HomeButton
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full bg-[#007BFF] hover:bg-blue-600"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate 3D Image
                </>
              )}
            </HomeButton>
          </Card>

          {/* Example Prompts */}
          <Card className="p-6">
            <h3 className="mb-4">Example Prompts</h3>
            <div className="space-y-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(example)}
                  className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-colors"
                >
                  {example}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Output Section */}
        <div>
          <Card className="p-6">
            <h3 className="text-xl mb-4">Generated Design</h3>
            {generatedImage ? (
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={generatedImage}
                    alt="Generated iron works design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-3">
                  <HomeButton
                    onClick={() => setShowQuote(true)}
                    className="flex-1 bg-[#007BFF] hover:bg-blue-600"
                  >
                    Request Quote for This Design
                  </HomeButton>
                  <HomeButton
                    onClick={() => setGeneratedImage(null)}
                    variant="outline"
                    className="flex-1"
                  >
                    Generate New Design
                  </HomeButton>
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Like this design? Request a quote and our team will bring it to life!
                </p>
              </div>
            ) : (
              <div className="aspect-square bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-400">
                  <ImageIcon className="h-16 w-16 mx-auto mb-4" />
                  <p>Your generated design will appear here</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>

      <QuoteDialog open={showQuote} onOpenChange={setShowQuote} />
    </div>
  );


}


