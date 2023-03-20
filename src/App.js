
import './App.css';
import NavigationBar from './components/Navigationbar';
import Intro from './components/intro';
import Trending from './components/Trending';
import SuperHero from './components/Superhero';
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* intro */}
      <div className="myBg">
      <NavigationBar />
      <Intro />
      </div>
      {/* end intro */}
      <div className="trending">
      <Trending />
      </div>
      <div className="superhero">
      <SuperHero />
      </div>
    </div>
  );
}

export default App;
