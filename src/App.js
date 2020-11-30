import PreparingPage from './PreparingPage';
import VotePage from './VotePage';
import {BrowserRouter, Route} from 'react-router-dom';
import './Styles/styles.css';
import './Styles/custom.css';

function App() {
  return (
    <BrowserRouter>
      <Route path = "/" exact>
        <PreparingPage />
      </Route>
      <Route path = "/vote">
        <VotePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
