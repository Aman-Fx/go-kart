import { images } from "../constants";

const GalleryPage = () => {
  return (
    <section className="min-h-dvh bg-gradient-to-r from-black via-gray-950 to-gray-950 pt-24 pb-20">
      <div className="container mx-auto">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-5">
          {images.map((src, index) => (
            <div key={index} className="mb-5 rounded-lg overflow-hidden break-inside-avoid shadow-xl shadow-background">
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
