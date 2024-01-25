
// import video from "./videos";
import NavBar from './components/Navbar';
// import Logo from './components/logo';
import TextMaker from './components/lorem-ipsum';
import Gallery from './components/gallery';
import Footer from './components/footer';
import HeroSection from './components/HeroSection';
import Counter from './components/Counter';
import Section from './components/Section';

function App() {
  return (
    <div className="container">
    <div className="App">
     
      <header className="App-header">
      {/* <Logo /> */}
      {/* <NaviBar />  */}
      <NavBar />
      <HeroSection />
      </header>
      <main className="page-main">
      <div>
      <Section />
        <h2>Main Photo</h2>
          <section className="container-fluid">
            <img src="../images/building-in-london.jpeg" className="column" alt="" />
            <div className="column">
            <h3>Intro text</h3>
            <TextMaker />
            </div>
          </section>

        <h2>Next Section 2</h2>
        <section className="item" >
          <div className="text-maker">
          <TextMaker />
          </div>
          <img src="../images/pexels-photo-1106476.jpeg" className="App-picture" alt="" /> 
        </section>

        <h2>Next Section 3</h2>
        <section className="item" >
          <div className="text-maker">
          <TextMaker />
          </div>
          <img src="../images/pexels-photo-5292195.webp" className="App-picture" alt="" />
        </section>

        <Gallery />
        <Section />
        <section className="item">
          <div>
           <h2>Something spare</h2>
           </div>
        </section>

        <h2>Next section 4</h2>
        <section className="item">
          <div className="text-maker">
          <TextMaker />
          </div>
          <img src="../images/pexels-photo-5582597.jpeg" className="App-picture" alt="" />
        </section>

        </div>
      </main>
      {/* contact form  */}
      
       
      <footer className='App-footer'>
      <Footer />  
      </footer>
      <Counter />
      {/* container ends*/}
      </div>
      </div>
  );
}

export default App;
