import { Route, Routes } from "react-router-dom";
import Login from "./auth/login"
import AdminDashboard from "./components/admin/dashboard"
import EmployeeDashboard from "./components/employee/dashboard"
import EmployeeOnboarding from "./components/admin/onboarding_emp"
import EmployeeList from "./components/admin/employee-list"
import AssignTask from "./components/admin/assign_task"
import EmployeeTask from "./components/employee/employee_task"
import AddProject from "./components/admin/add-project";
import Addtask from "./components/admin/add-task";
import Details from "./components/employee/fulldet";
import Entry from "./components/entry.jsx"
import './App.css'
function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/Login" element={<Login />} />
       
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard /> }/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
         <Route path="/admin/employee-onboarding" element={<EmployeeOnboarding />}> </Route> 
         <Route path="/admin/employees" element={<EmployeeList />}> </Route>  
         <Route path="/admin/assign-task" element={<AssignTask />}> </Route>
         <Route path="/employee/tasks" element={<EmployeeTask />}> </Route> 
         <Route path="/admin/add-project"element={<AddProject/>} >  </Route>
         <Route path="/admin/add-task"element={<Addtask/>}></Route>
         <Route path="/employee/tasks/Details"element={<Details/>}></Route>
         </Routes>
    </>
  )
}

export default App