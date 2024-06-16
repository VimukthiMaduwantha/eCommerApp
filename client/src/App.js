import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBarComp from './Components/NavBarComp';
import Home from './Views/Home';
import Shop from './Views/Shop';
import AdminManagement from "./Views/AdminManagement"
import { ThemeProvider, createTheme } from '@mui/material';

//set theme on MUI
const theme = createTheme({
  palette: {
    primary: {
      main: "#C40C0C",
    },
    secondary: {
      main: "#282626",
      dark: "#131212",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBarComp />
        <div style={{ paddingTop: '60px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shopstore' element={<Shop />} />
            <Route path='/adminmanagement' element={<AdminManagement />} />
          </Routes>
        </div>

      </ThemeProvider>
    </>
  );
}

export default App;