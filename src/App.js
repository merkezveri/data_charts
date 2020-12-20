import './App.css';

//Third Party
import {BrowserRouter as Router,Route} from "react-router-dom";

// Component
import Page from "./Page";
import Navbar from './component/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Page />
      </div>
    </Router>
  );
}

export default App;
