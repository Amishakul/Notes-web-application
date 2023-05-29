import NavBar from "./NavBar";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

function Home()
{
  const [user, setUser] = useState();
  const nav = useNavigate();
  
  const lo = (event) => {
           event.preventDefault();
           const auth = getAuth();
           localStorage.clear();
           signOut(auth)
           .then(res => nav("/login"))
           .catch(err => console.log(err))
          }

  const loc = useLocation();
  
  useEffect( () => {
           let u = localStorage.getItem("un");
           if(u == null)
               nav("/login");
           else
               setUser(u);
},[])


  return(
       <>
         <center>
              <NavBar/>
              <h1> Welcome User🤗</h1>
              <hr/>
              <h4> user details -- { user }</h4>
              <hr/>
              <h3> Choose the subject you want to view from below📖 </h3>
              <br/>
              
              
             <div class="blue">
        <div class="card1">
        <h2> <a href="https://drive.google.com/drive/folders/1ZC5rlLCndna9K_wKwJuFNwSoTcnXouqE?usp=sharing" target="_blank">Physics</a>⚛️</h2>
        
   
            
        </div>
    </div>
   <br/> <br/>

  <div class="green">
        <div class="card2">
    <h2> <a href="https://drive.google.com/drive/folders/1jc1VGcI2VUmhXmNSAw9h4THeVunqeh0V?usp=sharing" target="_blank">Computer</a>💻</h2>
   
            
        </div>
    </div>

<div class="lightgreen">
        <div class="card3">
        <h2> <a href="https://drive.google.com/drive/folders/1Q0tzuLnmvVZFDdPSMEYuzO9fBuzzR_QH?usp=sharing" target="_blank">Information Technology</a>🖥️</h2>
   
            
        </div>
    </div>

 <div class="random">
        <div class="card4">
        <h2> <a href="https://drive.google.com/drive/folders/17tByreyCsEG7Er2U6ZhAhqxJQoOgukm-?usp=sharing" target="_blank">Electronics</a>🔌</h2>
   
            
        </div>
    </div>


    <div class="random2">
        <div class="card5">
        <h2> <a href="https://drive.google.com/drive/folders/1LEwOZjjUwsndSL_Np8SPUhXgUI1js3ys?usp=sharing" target="_blank">Chemistry</a>🧪</h2>
   
            
        </div>
    </div>

    <div class="random3">
        <div class="card6">
        <h2> <a href="https://drive.google.com/drive/folders/11z84cYz07r4a1ROdkH3AhM9fcvolDzDm?usp=sharing" target="_blank">Maths</a>📏</h2>
   
            
        </div>
    </div>

  
   
    <br/>
    
    
     <h2> ➡️<a href="https://forms.gle/vVqk4PF5uRChmtx56" target="_blank">  Give your feedback here </a> ⬅️</h2> 
    <br/>
    

   
                       <form onSubmit={lo}>
                
                       <input type="submit" value="Logout"/>

                       
                       <br/><br/>
                </form>
         </center>
    </>
 );
}

export default Home;