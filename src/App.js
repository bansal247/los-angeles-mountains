import { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './pages/Hero';
import History from './pages/History';
import Team from './pages/Team';

function App() {
  const [isContent, setIsContent] = useState(false)
  const refHero = useRef(null)
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  

  useEffect(() => {
    if(offset===0){
      setIsContent(false)
    }
    else{
      setIsContent(true)
    }
  }, [offset])
  

  const handleClick = (e) => {
    if(e.target.id==='history'){
      ref1.current?.scrollIntoView({behavior: 'smooth'});
      setIsContent(true)
    }
    else if(e.target.id==='team'){
      ref2.current?.scrollIntoView({behavior: 'smooth'});
      setIsContent(true)
    }
    
  }
  return (
    <div className="App">
      <Header handleClick={handleClick} isContent={isContent}/>
      <Hero refHero={refHero}/>
      <History ref1={ref1}/>
      <Team ref2={ref2}/>
      <Footer/>
    </div>
  );
}

export default App;
