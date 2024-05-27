import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
import FetchJob from './component/page/FetchJob';
import Information from './component/page/Information';
import MainPage from "./component/page/MainPage";
const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App() {
    return (
        <BrowserRouter>
            <MainTitleText>오레가노</MainTitleText>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="FetchJob" element={<FetchJob />} />
                <Route path="Information" element={<Information />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;