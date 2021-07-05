import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectUser }  from "./features/userSlice";

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="app">
     <Header/>
     {!user ? (
       <Login />
     ): (
     <div className="app__body">
       <Sidebar />
       <Feed/>
     </div> 

     )}

    </div>
  );
}

export default App;
