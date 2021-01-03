import {useEffect} from 'react';
import Particles from '../node_modules/particlesjs'
import PreparingPage from './PreparingPage';
import VotePage from './VotePage';
import Results from './Results';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import './Styles/styles.css';
import './Styles/custom.css';


function App() {

  useEffect(() => {
  Particles.init({
    // normal options
    selector: '.background',
    maxParticles: 300,
    connectParticles: false,
    
    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 200,
          color: '#000000',
        }
      }, 
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
          color: '#000000',
        }
      }, 
      {
        breakpoint: 320,
        options: {
          maxParticles: 0, // disables particles.js
        }
      }
    ]
  });
}, [])

  return (
    <BrowserRouter>
      <Route path = "/" exact>
        <Redirect to="/vote" />
      </Route>
      <Route path = "/vote">
        <VotePage />
      </Route>
      <Route path = "/results">
        <Results />
      </Route>
      <Route path = "/preparing" exact>
        <PreparingPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
