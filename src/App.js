import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/NavBar/NavBar";
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ParallaxProvider>
      <Nav />
      <Home />
      <Footer />
    </ParallaxProvider>
  )
}

export default App;
