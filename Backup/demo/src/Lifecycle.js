import React, { Component } from 'react'
import LifecycleA from './LifecycleA';

class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'prasanna'
         
      }
      console.log("Lifecycle constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("Lifecycle componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Lifecycle shouldComponentUpdate")
        return  true 
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("Lifecycle getSnapshotBeforeUpdate")
        return null;
    }
    componentDidUpdate(){
        console.log("lifecycle componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            name:"Codevolution"
        })
    }
  render() {
    console.log("Lifecycle render");
    return (
        <div>
     <div>Lifecycle</div>
     <button onClick={this.changeState}>Chnage state</button>
      <LifecycleA/>
        </div>
       
    )
  }
}

export default Lifecycle