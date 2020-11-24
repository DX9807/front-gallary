import Upload from './components/Upload.js';
import Gallary from './components/Gallary.js';
import View from './components/View.js';
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return(
    <div className="App">
    <h1>Gallary</h1>
    <Router>
      <Upload />
      <Route exact path="/"><Gallary /></Route>
      <Route exact path="/view/:id"><View /></Route>
    </Router>
    </div>
    
  )   
}

export default App;
