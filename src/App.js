import './App.css';
// import video from "./videos";
import NaviBar from './components/nav-bar';
import TextMaker from './components/lorem-ipsum';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NaviBar /> 
        <h1>ALGATE FIRE</h1>
        <img src="../images/st-pauls-cathedral.jpeg" className="App-logo" alt="logo" />
        {/* need to add video mp4 from linux computer */}
        <video autoPlay muted loop className='App-logo-video'>
          <source src ={process.env.PUBLIC_URL + '/home/paulzolik/react-projects/Algatelogovideo.mp4/Algate.mp4'} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <p>
          First choice! The only choice <span className="heart">♥️</span> ALGATE
        </p>
      </header>
      <div className="container">
        <section>
          <h1>next section</h1>
          <img src="../images/building-in-london.jpeg" className="App-picture" alt="" />
          <TextMaker />
        </section>
        <section>
          <h1>next section</h1>
          <TextMaker />
          <img src="../images/pexels-photo-1106476.jpeg" className="App-picture" alt="" />" 
        </section>
        <section>
          <h1>next section</h1>
          <TextMaker />
          <img src="../images/pexels-photo-5292195.webp" className="App-picture" alt="" />
        </section>
        <TextMaker />
        <footer className="crumbs">
        <li className="crumb"><a href="/">Twitter</a></li>
            <li className="crumb"><a href="/">Facebook</a></li>
            <li className="crumb"><a href="/">Tinder</a></li>
        <h3>Copycat 2023</h3>
        </footer>
      </div>     
      {/* container ends*/}
      </div>
  );
}

export default App;
