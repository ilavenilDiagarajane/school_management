
import './App.css';
import { Routes, Route } from "react-router-dom";
import{Layout} from './components/Layout.js'
import {Login} from './components/Login.js'
import {Register} from './components/Register.js'
import{Dashboardlayout} from './components/Dashboardlayout.js'
import{Dashboard} from './components/Dashboard.js'
import { Classesapply } from './components/Classesapply.js';
import { Classes } from './components/Classes.js';
import { Leavelist } from "./components/Leavelist.js";
import { Leave } from "./components/Leave.js";
import { Profile } from "./components/Profile.js";

function App() {
  return (
    <div className="App">
   
     <Routes>
        <Route path="/" element={<Layout />} >
            <Route index  element={<Login />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/dashboardlayout/:id" element={<Dashboardlayout />} >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="classesapply" element={<Classesapply />} />
            <Route path="classes" element={<Classes />} />
            <Route path="leavelist" element={<Leavelist />} />
            <Route path="leave" element={<Leave />} />
            <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
