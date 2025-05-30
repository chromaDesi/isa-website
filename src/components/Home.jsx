import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";


const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        <Navbar/>

        <main>
            <Hero/>
            <About/>
        </main>
        
        <Footer/>

    </div>
)};

export default Home;