import React, { Component } from 'react'
import EmployeeService from './EmployeeService';


class ListofEmployees extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        employees :[]
      }
      this.addEmployee=this.addEmployee.bind(this);
    }
    componentDidMount(){
       EmployeeService.getEmployee().then((res)=>{
        this.setState({employees: res.data});
       });
    }
    addEmployee(){
      this.props.history.push('/add-Employee')
    }
  render() {
    return (
      <div className="employee">
        <h2 className="text-center">Employee List</h2>
       <div className='row'>
      <th> <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button></th>
       </div>
        <div calssName="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Role</th>
                        <th>Employee Mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      this.state.employees.map(
                       employee =>
                       <tr key = {employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.role}</td>
                        <td>{employee.mail}</td>
                       </tr>
                      )
                    }
                </tbody>
            </table>

        </div>
      </div>
    )
  }
}

export default ListofEmployees