interface BannerProps {
  images: {
    src: string;
    name: string;
  }[];
  speed: number; // in milliseconds
  direction: string;
}

export function ImageSection({ images, speed, direction }: BannerProps) {
  const imagesStyle: React.CSSProperties = {
    animation: `${direction} ${speed}ms linear infinite`,
  };

  return (
    <div className="images-vertical" style={imagesStyle}>
      {images.map(({ src, name }, index) => (
        <div key={index} className="image-vertical">
          <img
              src={src}
              alt={name}
              className="w-[350px] h-60 object-cover rounded-md shadow-md"
            />

        </div>
      ))}
    </div>
  );
}

export default function Banner({ images, speed, direction }: BannerProps) {
  return (
    <div className="banner-wrapper-vertical">
      <div className="wrapper-vertical">
        {/* Repeat images twice for smooth loop */}
        <ImageSection images={images} speed={speed} direction={direction}/>
        <ImageSection images={images} speed={speed} direction={direction}/>
        
      </div>
    </div>
  );
}
