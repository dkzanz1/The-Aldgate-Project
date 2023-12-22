import './App.css';
// import video from "./videos";
import Logo from './components/logo';
import NaviBar from './components/nav-bar';
import TextMaker from './components/lorem-ipsum';
import Gallery from './components/gallery';
import Footer from './components/footer';
function App() {
  return (
    <div className="container">
    <div className="App">
     <Logo />
      <header className="App-header">
      <NaviBar /> 
        {/* need to add video mp4 from linux computer */}
        {/* <video autoPlay muted loop className='App-logo-video'>
          <source src ={process.env.PUBLIC_URL + '/home/paulzolik/react-projects/Algatelogovideo.mp4/Algate.mp4'} type="video/mp4" />
          Your browser does not support the video tag
        </video> */}
      </header>
      
     <main className="page-main">
     <p>
          First choice!<br></br>The only choice <span className="heart">♥️</span> ALGATE
      </p>
      <div>
        <section className="photo-grid">
          <h2>next section 1</h2>
          
          <img src="../images/building-in-london.jpeg" className="App-picture" alt="" />
          <TextMaker />
        </section>
      
        <section className="photo-grid">
          <h2>next section 2</h2>
          <TextMaker />
          <img src="../images/pexels-photo-1106476.jpeg" className="App-picture" alt="" /> 
        </section>

        <section className="photo-grid">
          <h2>next section 3</h2>
          <TextMaker />
          <img src="../images/pexels-photo-5292195.webp" className="App-picture" alt="" />
        </section>
        <Gallery />
        <section className="photo-gallery">
          <div>
           <h2>Something spare</h2>
           </div>
        </section>

        <section className="photo-grid">
          <h2>next section 4</h2>
          <TextMaker />
          <img src="../images/pexels-photo-5582597.jpeg" className="App-picture" alt="" />
        </section>
        </div>
      </main>
      {/* contact form  */}
      
      </div> 
      <footer>
      <Footer />  
      </footer>
      {/* container ends*/}
      </div>
  );
}

export default App;
