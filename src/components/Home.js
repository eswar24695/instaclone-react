import React from "react";
import { Link } from "react-router-dom";
import '../styles/Card.css';
const Home=()=>{
 
return(
     
     <div>
        <div id="home">
     <img src="./images/welc.jpg" id="img1"></img>
     <div id="green">10x Team 04</div>
     </div>
     <Link to="/fetch" id="btn">Enter</Link>
     </div>
    )

}

export default Home;