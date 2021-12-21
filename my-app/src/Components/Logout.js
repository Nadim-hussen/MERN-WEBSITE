import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
function Logout() {
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("http://localhost:8000/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            navigate("/login",{replace:true})
            if(res.status !== 200){
                const error = new Error(res.error)
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
  return (
    <div className="text-center mt-3">
     
     <h2 className="about-text">Logout page</h2>
    </div>
  );
}

export default Logout;
