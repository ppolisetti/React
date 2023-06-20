import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from './EmployeeService';

function EmployeeList() {
    
 const[employees, setEmployee]=useState([]);
  

 useEffect(() => {
    EmployeeService.getEmployee().then((res) => {
      setEmployee(res.data); // Set employees to the array directly
    });
  }, []);


 const navigate = useNavigate();
  const addEmployee = () => {
    navigate('/add-Employee');
  };
  const updateEmployee =(empId) =>{
    navigate(`/update-Employee/${empId}`);
  }

  return (
    <div className="employee">
        <h2 className="text-center">Employee List</h2>
       <div className='row'>
      <th> <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button></th>
       </div>
        <div className="row">
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
                      employees.map(employee =>(
                       <tr key = {employee.empId}>
                        <td>{employee.empId}</td>
                        <td>{employee.name}</td>
                        <td>{employee.role}</td>
                        <td>{employee.mail}</td>
                        <td>
                          <button onClick={() => updateEmployee(employee.empId)} className="btn btn-info">Update</button>
                        </td>
                       </tr>
                      ))
                    }
                </tbody>
            </table>

        </div>
      </div>
  )
}

export default EmployeeList