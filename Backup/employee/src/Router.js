import React from 'react'
import { Route, Routes } from 'react-router'
import AddEmployee from './Components/AddEmployee'
import EmployeeList from './Components/EmployeeList'
import UpdateEmployee from './Components/UpdateEmployee'
//import Navbar from './Components/Navbar'


function Router(props) {
  return (
    <div>
    
      <Routes >
      <Route path='/' element={<EmployeeList/>}/>
      <Route path='/employees' element={<EmployeeList/>}/>
      <Route path='/add-Employee' element={<AddEmployee/>}/>
      <Route path='/update-Employee/:empId' element={<UpdateEmployee/>}/>
    </Routes>
    
    </div>
  )
}

export default Router