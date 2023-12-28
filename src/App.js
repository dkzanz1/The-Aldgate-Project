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
    <div>
     <Logo />
    </div>
     <p>
          First choice!<br></br>The only choice <span className="heart">♥️</span> ALGATE
      </p>
      <header className="App-header">
      <NaviBar /> 
        {/* need to add video mp4 from linux computer */}
        {/* <video autoPlay muted loop className='App-logo-video'>
          <source src ={process.env.PUBLIC_URL + '/home/paulzolik/react-projects/Algatelogovideo.mp4/Algate.mp4'} type="video/mp4" />
          Your browser does not support the video tag
        </video> */}
      </header>
      <main className="page-main">
      <div>

      <h2>Main Photo</h2>
        <section className="item">
          <img src="../images/building-in-london.jpeg" className="App-picture" alt="" />
          <div className="text-maker">
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
        <section className="item">
          <div className="text-maker">
          <TextMaker />
          </div>
          <img src="../images/pexels-photo-5292195.webp" className="App-picture" alt="" />
        </section >

        <Gallery />

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
      
      </div> 
      <footer>
      <Footer />  
      </footer>
      {/* container ends*/}
      </div>
  );
}

export default App;
