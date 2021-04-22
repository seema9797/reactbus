import React, { Component } from 'react'

class Counter extends Component{
  constructor(props){
      super(props)
       
        this.state={
            Count:0
        
      }
  }

  increment(){
      this.setState(
          {
          count: this.state.count +1
        },
        ()=>{
            console.log('Callback value',this.state.count)
        }
      )
      console.log(this.state.count)
  }
  increment

    render(){
        return(
            <div>
               <div> Count - {this.state.Count}</div>
               <button onClick={()=>{this.increment()}}>Increment</button>
            </div>
        )
    }
}