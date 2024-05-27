import React from "react";
import Job from "../contents/Jobs/Job";
import { useNavigate } from "react-router-dom";

function FetchJob(){
    const navigate = useNavigate();
    return (
        <div>
            <button
                title="메인"
                onClick={() => {
                navigate('/');
            }} />
            <Job/>
        </div>
    );
}

export default FetchJob;