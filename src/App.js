import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import SectionFive from './components/section-five';
import SectionFour from './components/section-four';
import SectionOne from './components/section-one';
import SectionSix from './components/section-six';
import SectionThree from './components/section-three';
import SectionTwo from './components/section-two';

function App() {
  return (
    <div className="App">
     <Header />
     <SectionOne />
     <SectionTwo />
     <SectionThree />
     <SectionFour />
     <SectionFive />
     <SectionSix />
     <Footer />
    </div>
  );
}

export default App;
