import React  from 'react'
 
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route 
   
} from "react-router-dom";
import Home from './screen'
import Detail from './screen/detail'
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
const App=()=> {
  
  return (
    <  >
    <Router>
      <Routes >
        <Route exact path="/"  element={<Home/>} ></Route>
        <Route exact path="/detail"  element={<Detail/>} ></Route>
        
      </Routes>
    </Router>
    </>
  );
}
 

export default App;
