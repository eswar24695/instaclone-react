
import React, { useState, useEffect } from "react";
import '../styles/App.css';
import Card from "./card";
import Postview from "./postview";

const Fetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://backend-node.onrender.com/data").then((res) => {
      return res.json()
    }).then((info) => {
        //console.log(info.result);
      setData(info.result);
      //console.log(data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div id="main">
   <Postview/>
      {data.length ? data.map((item,id) => {
        return ( 
    <Card key={id} item={item}/> )
      }) : null}
    </div>

  )

}
export default Fetch;