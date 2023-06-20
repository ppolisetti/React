import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import EmployeeService from './EmployeeService';

function AddEmployee() {
    const [name, setName]=useState('');
    const [role, setRole]=useState('');
    const [mail, setMail]=useState('');

    const navigate = useNavigate();
  const cancel = () => {
    navigate('/employees');
  };
const saveEmployee=(e)=>{
  e.preventDefault();
  let employee = { name, role, mail };
  console.log('employee =>' +JSON.stringify(employee));
  EmployeeService.addEmployee(employee).then(res=>{
    navigate('/employees');
  });
}


  return (
    <div className="employee">
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Add Employee</h3>
                <div className="card-body" >
                    <form >
                        <div className="form-group" >
                            <label>Name</label>
                            <input type='text' placeholder="Enter your name" className="form-control" value={name} onChange={e =>setName(e.target.value) }/>
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <input type='text' placeholder="Enter your role" className="form-control" value={role} onChange={e =>setRole(e.target.value) }/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type='text' placeholder="Enter your email" className="form-control" value={mail} onChange={e =>setMail(e.target.value) }/>
                        </div>
                        <div style={{padding:"15px",marginLeft:"0vh"}}>
                        <button className="btn btn-success" onClick={saveEmployee}>Save</button>
                        <button className="btn btn-danger" onClick={cancel} style={{marginLeft:"10px"}}>Cancel</button>
                        </div></form>
                </div>
            </div>

        </div>
        </div>
  )
}

export default AddEmployee