import React from 'react';

const Hello =()=>{
  
   // return<h1>Class Component</h1>

   return React.createElement(
   'div',
   {id:'hello',className:'Dummyclas'},
   React.createElement('h1',null,'Hello React'));

}
export default Hello;