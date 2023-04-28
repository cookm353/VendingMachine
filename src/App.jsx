import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
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
          <Link to="/">Home</Link>
          <Link to="/slurm">Slurm</Link>
          <Link to="/bachelor-chow">Bachelor Chow</Link>
          <Link to="/popplers">Popplers</Link>
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
