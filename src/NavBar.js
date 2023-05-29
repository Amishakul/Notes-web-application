import { Link } from "react-router-dom";

function NavBar()
 {
     const un = localStorage.getItem("un");
    return(
      <>
       <center>
           <div className="nav">
                  {(un == null) && (<Link to="/login"> Login</Link>)}
                  {(un == null)&& (<Link to="/signup"> SignUp</Link>)}
                  {(un != null)&& (<Link to="/home"> Home</Link> )}    
                  {(un != null) && (<Link to="/cp"> Change Password</Link>)}
                  {(un == null) && (<Link to="/fp"> Forgot Password </Link>)}
           </div>
      </center>
   </>
  );
}
export default NavBar;
                  