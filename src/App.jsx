import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import { Toaster } from './components/ui/toaster';

// Lazy load components
const Hero = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const NotFound = lazy(() => import('./components/NotFound'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster/>
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route index element={<Hero/>} />
              <Route path="/About" element={<About/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
