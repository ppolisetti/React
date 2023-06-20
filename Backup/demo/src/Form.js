import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:'',
         lastname:'',
         topic:'React',
         Gender:'',
         submit:''

      }
    }
      handleFirstnameChange = (event) => {
        this.setState({
            firstname: event.target.value
        })
    }
    handleLastnameChange = (event) => {
      this.setState({
        lastname: event.target.value
      })
  }
  handleTopicnameChange = (event) => {
    this.setState({
      topic: event.target.value
    })
}
handleGenderChange = (event) => {
  this.setState({
    Gender : event.target.value
  })
}
handleSubmit = event => {
  alert(`${this.state.firstname} ${this.state.lastname} ${this.state.topic} ${this.state.Gender}`)
  event.preventDefault()
}
  render() {
    return (
        <form onSubmit={this.handleSubmit}> 
          <div>
            <label>Firstname : </label>
            <input className="but1" type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} required="required"></input>
          </div>
          <div>
            <label> Lastname : </label>
            <textarea className="but1"  value={this.state.lastname} onChange={this.handleLastnameChange}></textarea>
          </div>
          <div>
            <label> Topic : </label>
            <select className="but1" value={this.state.topic} onChange={this.handleTopicnameChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Java">Java</option>
            </select>
          </div>
          <div onChange={this.handleGenderChange} >
            <label> Gender :</label> 
            <input  className="but2" type="radio" value="Male" name="Gender"></input >Male
            <input className="but2" type="radio" value="Female" name="Gender"></input>Female
            <input className="but2" type="radio" value="other" name="Gender"></input>other
          </div> 
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      
    )
  }
}

export default Form