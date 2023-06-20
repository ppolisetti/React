import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import EmployeeService from './EmployeeService';

function UpdateEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [mail, setMail] = useState('');

  const { empId } = useParams();
  const navigate = useNavigate();

  const cancel = () => {
    navigate('/employees');
  };
  useEffect(() => {
    EmployeeService.getEmployeebyId(empId) // Call getEmployeebyId to fetch the employee data
      .then((res) => {
        let employee = res.data;
        setName(employee.name);
        setRole(employee.role);
        setMail(employee.mail);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, [empId]);

  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = { name, role, mail };
    console.log('employee =>', JSON.stringify(employee));

    EmployeeService.updateEmployee(empId, employee) // Pass employee data as second parameter
      .then((res) => {
        console.log('Employee updated successfully');
        navigate('/employees'); // Navigate to employee list after successful update
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
      });
  };

 

  return (
    <div className="employee">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center">Update Employee</h3>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  placeholder="Enter your role"
                  className="form-control"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="form-control"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                />
              </div>
              <div style={{ padding: '15px', marginLeft: '0vh' }}>
                <button className="btn btn-success" onClick={updateEmployee}>
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;