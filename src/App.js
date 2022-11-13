import './App.css';
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.js'
import Profile from "./pages/profile/Profile.js"
import Login from  "./pages/login/Login.js"
import Register from  "./pages/register/Register.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
