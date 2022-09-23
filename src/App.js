import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar";

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <h1>Testing Application</h1>
      
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
