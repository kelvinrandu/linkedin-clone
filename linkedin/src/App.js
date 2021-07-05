import React,{useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { selectUser,login,logout }  from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,

        }))

      }else{
        dispatch(logout());
      }
    })

  },[])
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
