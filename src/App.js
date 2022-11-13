import './App.css';
import ReactDOM from 'react-dom/client'
import Home from './pages/home/Home.js'
import Profile from "./pages/profile/Profile.js"
import Login from import Profile from "./components/login/Login.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
