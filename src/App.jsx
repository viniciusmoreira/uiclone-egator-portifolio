import React from 'react';
import Header from './components/header';
import Nav from './components/nav';
import About from './components/about';
import Expiriences from './components/expiriences';
import Services from './components/services';
import Portifolio from './components/portifolio';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Expiriences /> 
      <Services />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />

      <GlobalStyle />
    </>
  )
}

export default App;