import './App.css';
// import video from "./videos";
import NaviBar from './components/nav-bar';
import TextMaker from './components/lorem-ipsum';

function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
      <NaviBar /> 
        {/* <h1>ALGATE FIRE</h1> */}
       
        {/* need to add video mp4 from linux computer */}
        {/* <video autoPlay muted loop className='App-logo-video'>
          <source src ={process.env.PUBLIC_URL + '/home/paulzolik/react-projects/Algatelogovideo.mp4/Algate.mp4'} type="video/mp4" />
          Your browser does not support the video tag
        </video> */}
        <p>
          First choice!<br></br>The only choice <span className="heart">♥️</span> ALGATE
        </p>
      </header>
     <main className="page-main">
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

        <section className="photo-gallery">
          <h2>Gallery 1</h2>
          <div>
            <ul>
              <li><img src="../images/pexels-photo-1502941 (1).jpeg" className="App-picture" alt="" /></li>
              <li><img src="../images/pexels-photo-1502941 (1).jpeg" className="App-picture" alt="" /></li>
              <li><img src="../images/pexels-photo-1502941 (1).jpeg" className="App-picture" alt="" /></li>
            </ul>
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
        <footer className="Media-crumbs">
            <li className="crumb"><a href="/">Twitter</a></li>
            <li className="crumb"><a href="/">Facebook</a></li>
            <li className="crumb"><a href="/">Tinder</a></li>
        <h3>Copycat 2023</h3>
        <h4>Call us direct <a href="tel:+44 123-456-789">123-456-789</a></h4>
        {/* <h4>email us on <a href="mailto: [a.person@somewhere.co.uk]?su" alt="email"></a></h4> */}
        </footer>
      </div>     
      {/* container ends*/}
      </div>
  );
}

export default App;
