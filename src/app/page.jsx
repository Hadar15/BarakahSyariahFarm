import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Products from "../components/products";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Footer from "../components/footer";

const Home = () => (
  <div>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Home;
