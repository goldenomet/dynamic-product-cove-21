import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const PhotoUploadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    photo: null as File | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      toast({
        title: "Request Submitted Successfully!",
        description: "Our customer care team will contact you shortly.",
      });

      setFormData({
        name: '',
        email: '',
        description: '',
        photo: null,
      });
      
      // Reset file input
      const fileInput = document.getElementById('photo') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto"
      name="photo-upload"
      method="POST"
      encType="multipart/form-data"
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="photo-upload" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-secondary focus:outline-none"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-secondary focus:outline-none"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-secondary focus:outline-none"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
          Upload Photo
        </label>
        <div className="mt-1 flex items-center justify-center w-full">
          <label
            htmlFor="photo"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 10MB)</p>
            </div>
            <input
              id="photo"
              name="photo"
              type="file"
              className="hidden"
              accept="image/png,image/jpeg,image/jpg"
              required
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setFormData({ ...formData, photo: file });
              }}
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>
    </form>
  );
};

export default PhotoUploadForm;