import './App.css'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { Element } from 'react-scroll'
// import ImageUpload from './components/ImageUpload'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
function App() {
  return (
    <div>
      <Navbar />
      <Element name='heroSections'>
        <Hero />
      </Element>
      <Element name='analyticsSection'>
        <Analytics />
      </Element>
      <Newsletter />
      <Cards />
      {/* <ImageUpload /> */}
      <Element name='footerSection'>
        <Footer />
      </Element>
    </div>
  )
}

export default App
