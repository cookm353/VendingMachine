import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import VendingMachine from './VendingMachine'
import Slurm from './Slurm'
import BachelorChow from './BachelorChow'
import Popplers from './Popplers'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='d-flex justify-content-around'>
          <NavLink className='link' to="/">Home</NavLink>
          <NavLink className='link' to="/slurm">Slurm</NavLink>
          <NavLink className='link' to="/bachelor-chow">Bachelor Chow</NavLink>
          <NavLink className='link' to="/popplers">Popplers</NavLink>
        </div>
        <Routes>
          <Route exact path='/' element={<VendingMachine/>}/>
          <Route exact path='/slurm' element={<Slurm/>}/>
          <Route exact path='/bachelor-chow' element={<BachelorChow/>}/>
          <Route exact path='/popplers' element={<Popplers/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
