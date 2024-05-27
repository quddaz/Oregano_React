import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FluctuationChart from '../contents/chart/FluctuationChart';
import { useNavigate } from "react-router-dom";
import KorMap from '../contents/Map&graph/KorMap';
import PopulationTable from '../contents/Map&graph/PopulationTable';
import styled from "styled-components";
const Wrapper = styled.div`
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; /* 높이를 조정하여 지도와 그래프를 적절히 표시합니다. */
`;

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 600px;
`;

const Content = styled.div`
    width: 48%;
    height: 100%; 
`;

const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #45a049;
    }
`;

function MainPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const res = await axios.get('/filtered-disabled-people');
            setData(res.data);
        } catch (error) {
            console.error("Error fetching job listings:", error);
        }
    };

    return (
        <Wrapper>
            <Button
                onClick={() => {
                    navigate('/FetchJob');
                }}>정보</Button>
            <Button
                onClick={() => {
                    navigate('/Information');
                }}>구인구직</Button>
            <Container>
                <Content>
                    <KorMap data={data} />
                </Content>
                <Content>
                    <PopulationTable data={data} />
                </Content>
            </Container>
            <FluctuationChart data={data} />
        </Wrapper>
    );
}

export default MainPage;
