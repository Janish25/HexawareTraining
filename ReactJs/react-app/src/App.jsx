import './App.css';
import { Outlet, Route, Routes } from 'react-router';
import Variables from './components/variables';
import ArrayObjects from './components/arrayObjects'; 
import StateComponent from './components/statesComponent'
import PostData from './components/postdata';
import AddEmployee from './components/addEmployee';
import UseEffectDemo from './components/useEffectdemo';
import Navbar from './components/navbar';
import EmployeeList from './components/employee_list';
import AddUser from './components/user_add';
import UserList from './components/User_list';

import { Bounce, ToastContainer } from 'react-toastify';
import UpdateEmployee from './components/updateemployee';

function App() {
  return (

    <div className='container-fluid'>
      <div className='row mb-4'>
        <div className='col-lg-12'>
          <Navbar />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <Routes>
            <Route path="/" element={<AddUser />} />
            <Route path="/employee" element={<EmployeeList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/employee-update" element={<UpdateEmployee />} />
          </Routes>
           
        </div>
      </div>
    
    

  
      {/* <Variables />
      <ArrayObjects /> */}
      {/* <StateComponent /> */}
      {/* <PostData/> */}

      {/* <AddEmployee/> */}

      {/* <UseEffectDemo/> */}


      
    </div>
  );
}

export default App;
