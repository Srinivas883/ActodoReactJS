import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup';
import Login from './pages/Login';
import Landing from './pages/landing';
import { useState } from "react";

function App() {
  const [users, setusers] = useState(
    [
      {
        username: "John",
        password: "123"
      }
    ]
  )
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
      <Route path='/signup' element={<Signup users={users} setusers={setusers} />}></Route>
      <Route path='/landing' element={<Landing />}></Route>
    </Routes>
  </BrowserRouter>)
}

export default App;
