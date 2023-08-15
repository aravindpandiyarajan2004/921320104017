import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import AllTrainsPage from './components/AllTrainsPage.js';
//import SingleTrainPage from './components/SingleTrainPage';


function App() {
  fetch("http://20.244.56.144/train/register")
.then((res) => res.json()) 
.then((data) =>{
  console.log(data);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AllTrainsPage} />
        <Route path="/train/:trainNumber" component={SingleTrainPage} />
      </Switch>
    </Router>
  );
}

export default App;