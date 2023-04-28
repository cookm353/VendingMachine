import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import VendingMachine from './VendingMachine'
import Slurm from './Slurm'
import BachelorChow from './BachelorChow'
import Popplers from './Popplers'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
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
