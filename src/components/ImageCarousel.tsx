import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    alt: "Aircraft Engine Monitoring Software",
    caption: "Advanced Monitoring Systems"
  },
  {
    url: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    alt: "Drone Technology",
    caption: "Next-Gen Inspection Technology"
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    alt: "Real-time Analytics",
    caption: "Real-time Performance Analytics"
  }
];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel className="relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold">{image.caption}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2" />
        <CarouselNext className="absolute right-4 top-1/2" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;