import PhotoUploadForm from '../components/PhotoUploadForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-accent py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-6">
            Submit Your Request
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your photos and our customer care team will get back to you shortly.
          </p>
        </div>
        <PhotoUploadForm />
      </div>
    </div>
  );
};

export default Index;