import React, { Component } from 'react';
import Greeting from './componet/Greeting';
import reactDom from 'react-dom';
import Welcome from './componet/Welcome';
import Hello from './componet/hello';
import Message from './componet/message';
import SearchBar from './componet/SerchBar'

class App extends Component{
  render(){
    return(
     <div className="App">
       <Greeting name="blurly" heroname="Sitick">
         <p>this is simple Paregraph</p>
       </Greeting>
       <Welcome/>
       <Message/>
       <Hello/>
       <SearchBar/>
       <Greeting name="suchita" heroname="Amole"/>
       <Greeting name="Manpreet" heroname="seema"/>
     </div>
    );
  }
}

reactDom.render(<App/>,document.querySelector('#root'));