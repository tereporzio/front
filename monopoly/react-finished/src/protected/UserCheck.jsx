import { useState, useEffect} from "react";
import { AuthContext } from "../auth/AuthContext";
import axios from 'axios';


function UserCheck() {
    const {token} = useContext(AuthContext);
    config = {
        'method ' : 'get',
        'url' : `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
        'headers' : {
            'Authorization' : `Bearer ${token}`

           }
    }

    useEffect(() => {
        axios(config).then((response)=>{
            console.log("Enviaste un token bueno y estas logueado!!")
            console.log(response);
        }).catch((error)=>{
            console.log("Enviaste un token malo y no estas logueado!!")
            console.log(error);
        })


    }, [])
    return (
        <h1>Algo </h1>
    )
}
export default UserCheck;
