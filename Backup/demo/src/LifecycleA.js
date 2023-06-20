import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'prasanna'
         
      }
      console.log("LifecycleA constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return  true 
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("LifecycleA getSnapshotBeforeUpdate")
      return null;
    }
    componentDidUpdate(){
        console.log("lifecycleA componentDidUpdate")
    }
  render() {
    console.log("LifecycleA render");
    return (
        
      <div>LifecycleA</div>
    )
  }
}

export default LifecycleA