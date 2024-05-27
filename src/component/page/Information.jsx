import React from "react";
import KakaoMap from "../contents/Kakao/KakaoMap";
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
            <KakaoMap/>
        </div>
    );
}

export default FetchJob;