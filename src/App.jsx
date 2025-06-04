import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Hero from './components/Home';
import NotFound from './components/NotFound';
import { Toaster } from './components/ui/toaster';
import About from './components/About';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000); // show for 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
    <Toaster/>
      {isLoading ? (
        <Preloader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Hero/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
