import React, { useState } from "react"
import styles from './Incident.module.css';
import {Button} from '@mui/material';
function Incident({incident,handleClick}){
    const{incident_id,priority,severity,status}=incident;
    const[form,setForm]=useState({
        incident_id:'',
        priority:'low',
        severity:'1',
        status:'open'
    });
    function handleChange(e){
        const {name,value}=e.target;
        setForm(prev =>({...prev,[name]:value}));

    }

    return(
        <>
        
        <div className={styles.Incident}>
            <span>{incident_id}</span>
            <span>{priority}</span>
            <span>{severity}</span>
            <span>{status}</span>
            <Button variant='contained' color="error" type="button" onClick={handleClick} className={styles.buttons}>Delete</Button>
        </div>
        </>
        
        
    )
}
export default Incident;
