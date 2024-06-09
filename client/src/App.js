import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarComp from './Components/NavBarComp';
import Home from './Views/Home';
import Shop from './Views/Shop';
import AdminManagement from "./Views/AdminManagement"

function App() {
  return (
    <>
      <NavBarComp />
      <div style={{ paddingTop: '60px' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shopstore' element={<Shop />} />
          <Route path='/adminmanagement' element={<AdminManagement />} />
        </Routes>
      </div>

    </>
  );
}

export default App;