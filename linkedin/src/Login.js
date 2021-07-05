import React,{useState} from 'react'
import "./Login.css"
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function Login() {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [profilePic,setProfilePic]= useState("");
    const dispatch = useDispatch();

   const signIn = (e) =>{ 
       e.preventDefault();
       

   }
   const register = (e)=>{
       if(!name){
           return alert("Please enter full name")

       }
    
       auth.createUserWithEmailAndPassword(email,password)
       .then((userAuth) =>{
           userAuth.user.updateProfile({
               displayName: name,
               photoURL: profilePic,

           })
           .then(()=>{
               dispatch(login({
                   email: userAuth.user.email,
                   uid: userAuth.user.uid,
                   displayName: name,
                   photoURL: profilePic,

               })); 

           });
       }).catch((error) => alert(error));
       console.log('here')

   };
    return (
        <div className="login">
            <img src="data:image/png;base64,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" alt=""/>
            <form>
                <input value={name} onChange={(e)=> setName(e.target.value)}placeholder="Full name" type="text" />
                <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)}placeholder="profile picture" type="text" />
                <input value={email} type="text" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" />
                <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password" type="password" />
                <button onClick={signIn}>sign in</button>
          
            </form>
            <p> not a member? <span className="login__register" onClick={register}> register </span></p>
    
            
        </div>
    )
}

export default Login
