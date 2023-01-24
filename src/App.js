import React from "react";
import {Navbar} from "./layout/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/adduser" element={<AddUser/>}/>
            <Route exact path="/edit/:id" element={<EditUser/>}/>
            <Route exact path="/view/:id" element={<ViewUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
