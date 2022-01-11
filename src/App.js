import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Counter from './components/Count'

// class App extends Component {
//   render() {
//   return (
//     <div className="App">
//       <Greet/>
//       <Welcome/>
//       <Hello/>
//     </div>
//   );
// }
// }

//another test
const App = () =>{

  return (
    <div className="App">
      <Greet name ="Apie" heroname="Superman"/>
      <Greet name ="Tence" heroname="Batman"/>
      <Welcome/>
      <Hello/>
      <Counter/>
    </div>
  );
}

export default App;
