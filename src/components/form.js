// import React, { useState } from "react"
// import Postview from "./postview"
// import { useNavigate } from "react-router-dom"
// import regeneratorRuntime from "regenerator-runtime";
// const Form=()=>{
//     const [imgFile, setImgFile]= useState()
//     const [name, setName] = useState('')
//     const [location, setLocation] = useState('')
//     const [description, setDescription] = useState('')
//     const navigate = useNavigate();
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('file',imgFile)
//         formData.append('Author',name)
//         formData.append('Location',location)
//         formData.append('Description',description)
//         await fetch("https://backend-node.onrender.com/form", {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{setResponse(data);console.log(data);}).catch((e)=>console.log(e))
//         navigate('/fetch')
// 	}
//     return(
//         <>
//         <Postview/>
//         <form encType="multipart/form-data" onSubmit={handleSubmit}>
//             <input type='file' name='file' onChange={(e)=> {setImgFile(e.target.files[0])}} accept='image/*'/><br></br>
//             <input type="text" name="Author"  onChange={(e)=>setName(e.target.value)} placeholder="Author"></input>
//             <input type="text" name="Location" onChange={(e)=>setLocation(e.target.value)} placeholder="Location"></input><br></br>
//             <textarea name="Description" onChange={(e)=>setDescription(e.target.value)} rows="1" cols="10"></textarea>
//             <button type="submit">Post</button>
//         </form>
//         </>
//     )
// }
// export default Form
import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime";
import './form.css'
import Postview from "./postview";
const Form=()=>{
    // const navigate=useNavigate()
    const [img,setimg]=useState("");
    const [Author,setauthor]=useState("");
    const [Location,setloc]=useState("");
    const [Description,setdes]=useState("");
    const navigate=useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file',img)
        formData.append('Author',Author)
        formData.append('Location',Location)
        formData.append('Description',Description);
        //useEffect(()=>{fetch("https://instaclone-backened-api.onrender.com/api/posts").then((res)=>res.json()).then((data)=>{setPosts(data);console.log(posts)}).catch((e)=>console.log(e))},[])
        //useEffect(()=>{fetch('https://instaclone-backened-api.onrender.com/api/posts', {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{setResponse(data);console.log(data)}).catch((e)=>console.log(e))},[]);
        await fetch("https://backend-node.onrender.com/form", {method:'post',body:formData}).then((res)=>res.json()).then((data)=>{console.log(data);}).catch((e)=>console.log(e))
        navigate('/fetch')
    }
    // const handleroute=(e)=>{
    //     e.preventDefault();
    //     navigate('/postview')
    // }
    return(
        <>
            <Postview/>
            <center id="border" >
            <form action="" encType="multipart/form-data" onSubmit={handleSubmit}>
                <input type="file" name="file" accept='image/*' onChange={(e)=>{setimg(e.target.files[0])}} /> <br />
                <div className="auth">
                <input type="text" placeholder="Author" name="Author"  onChange={(e)=>{setauthor(e.target.value)}}/>
                <input type="text" placeholder="Location" name="Location" onChange={(e)=>{setloc(e.target.value)}}/>
                </div>
               <textarea name="Description" placeholder="Description" cols="30" rows="5" onChange={(e)=>{setdes(e.target.value)}}></textarea> <br />
               <button type="submit">Post</button>
            </form>
            </center>
        </>
    )
}
export default Form;