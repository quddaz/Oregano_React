import React from "react";
import Job from "../contents/Jobs/Job";
import { useNavigate } from "react-router-dom";
import Button from '../UI/Button';
function FetchJob(){
    const navigate = useNavigate();
    return (
        <div>
            <Job/>
        </div>
    );
}

export default FetchJob;