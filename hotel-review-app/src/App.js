import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import HotelApp from "./component/HotelApp";

/*
function App() {
  return (
    <div className="App">
      Hello world
    </div>
  );
}
*/
class App extends Component{
    render() {
        return(
            <div className="container">
                <HotelApp/>
            </div>
        );
    }
}
export default App;
