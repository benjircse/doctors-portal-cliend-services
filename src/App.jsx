import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componetes/Pages/About/About';
import Appointment from './Componetes/Pages/Appointment/Appointment';
import Home from './Componetes/Pages/Home/Home';
import Login from './Componetes/Pages/Login/Login';
import Register from './Componetes/Pages/Login/Register';
import Navber from './Componetes/Shered/Navber';
import RequerAuth from './Componetes/Shered/RequerAuth';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Componetes/Pages/Dashboard/Dashboard';
import MyAppointment from './Componetes/Pages/Dashboard/MyAppointment';
import MyReview from './Componetes/Pages/Dashboard/MyReview';
function App() {
  return (
    <div className='mx-12'>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<RequerAuth><Appointment></Appointment></RequerAuth>}></Route>

        <Route path='/dashboard' element={<RequerAuth><Dashboard></Dashboard></RequerAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='reviws' element={<MyReview></MyReview>}></Route>
        </Route>

        <Route path='/reviws'  ></Route>
        <Route path='/contact'  ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>

  )
}

export default App;
