import { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className = '', width = 800, quality = 80 }) => {
  const [loaded, setLoaded] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState('');

  // Generate optimized image URL
  const optimizedSrc = src.includes('unsplash.com') 
    ? `${src}&w=${width}&q=${quality}&auto=format`
    : src;

  // Generate tiny placeholder
  const tinyPlaceholder = src.includes('unsplash.com')
    ? `${src}&w=10&blur=5`
    : src;

  useEffect(() => {
    // Preload the tiny placeholder
    const img = new Image();
    img.src = tinyPlaceholder;
    img.onload = () => {
      setBlurDataUrl(tinyPlaceholder);
    };
  }, [tinyPlaceholder]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {blurDataUrl && !loaded && (
        <img
          src={blurDataUrl}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover filter blur-lg transform scale-110"
          style={{ opacity: loaded ? 0 : 1 }}
        />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default OptimizedImage; 