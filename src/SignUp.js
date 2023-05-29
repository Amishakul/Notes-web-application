import NavBar from "./NavBar";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUp()
{
  const nav = useNavigate();
  useEffect( () => {
                const un = localStorage.getItem("un");
                if(un !=null)
                   nav("/home");
    },[]);
  const [un, setUn] = useState("");
  const [pw1, setPw1] = useState("");
  const [pw2, setPw2] = useState("");
  const [col, setCol] = useState("");
  const [ans, setAns] = useState("");
  const [coun, setCoun] = useState("");
  const [pho, setPho] = useState("");

  const hUn = (event) => {setUn(event.target.value);}
  const hPw1 = (event) => {setPw1(event.target.value);}
  const hPw2 = (event) => {setPw2(event.target.value);}
  const hCol = (event) => {setCol(event.target.value);}
  const hCoun = (event) => {setCoun(event.target.value);}
  const hPho = (event) => {setPho(event.target.value);}


  const save = (event) => {
                 event.preventDefault();
                 if(pw1 == pw2)
                 {
                    const auth = getAuth();
                    createUserWithEmailAndPassword(auth, un, pw1)
                    .then(res => nav("/login"))
                    .catch(err => alert("issue" + err))
                 }
                 else
                 {
                      alert("passwords did not match");
                 }
}

return(
     <>
      <center>
         <NavBar/>
          <h1> SignUp </h1>
          <form onSubmit={save}>
            <input type = "email" placeholder="enter reg email" onChange={hUn}/>
             <br/><br/>
             <input type ="password" placeholder="enter password" onChange={hPw1}/>
             <br/><br/>
             <input type ="password" placeholder="re-enter password" onChange={hPw2}/>
             <br/><br/>
             <input type ="text" placeholder="enter your college name" onChange={hCol}/>
             <br/><br/>
             <input type ="text" placeholder="enter your country " onChange={hCoun}/>
             <br/><br/>
             <input type ="number" placeholder="enter your phone no" onChange={hPho}/>
             <br/><br/>
             <input type="submit" value="SignUp"/>
             <br/><br/>
      </form>
           <h1> {ans} </h1>
      </center>
      </>
  );
}
export default SignUp;

