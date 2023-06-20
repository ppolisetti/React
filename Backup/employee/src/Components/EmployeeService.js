
import axios from 'axios'

const Employee_get_Url="http://localhost:8081/getAllEmployees";
const Employee_post_Url="http://localhost:8081/addEmployee";
const Employee_update_Url="http://localhost:8081/updateEmployee";
const Employee_getbyId_Url="http://localhost:8081/getEmployeebyId";
class EmployeeService {
  
    getEmployee(){
        return axios.get(Employee_get_Url);
    }
    addEmployee(employee){
        return axios.post(Employee_post_Url,employee)
    }
    updateEmployee(empId, employeeData) {
        return axios.put(Employee_update_Url + '/' + empId, employeeData);
      }

      getEmployeebyId(empId) {
      
        return axios.get(Employee_getbyId_Url + '/' +empId);
       
      }
}

export default new EmployeeService()