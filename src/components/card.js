
import React, { useEffect } from "react";
import '../styles/Card.css';
const Card = (props) => {
    console.log(props.item.Date.split("T")[0])
    return (
        <div>
            <div id="card">
                <div id="dot-cont">
                    <div>
                        <h3>{props.item.Author}</h3>
                        <p className="opac" >{props.item.Location}</p>
                    </div>
                    <div id="dot">
                        <img src="./images/dots.png" width="20em" height="20em"></img>
                    </div>
                </div>
                <div>
                    <img src={props.item.file} width="590px" height="300px"></img>
                </div>
                <div id="date-con">
                <img src="./images/like.png" width="20px" height="20px" ></img>
                <img src="./images/share.png" width="20px" height="20px" id="imgd"></img>
                <p id="date">{props.item.Date.split("T")[0]}</p>
                </div>
                <p className="opac" id='like'>{props.item.Likes} likes</p>
                <h3 id="des">{props.item.Description}</h3>
            </div>

        </div>
    )
}

export default Card;
