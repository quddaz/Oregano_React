import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FluctuationChart from '../contents/chart/FluctuationChart';
import { useNavigate } from "react-router-dom";
import KorMap from '../contents/Map&graph/KorMap';
import PopulationTable from '../contents/Map&graph/PopulationTable';
import styled from "styled-components";
import Button from '../UI/Button';
import Header from '../UI/Header';

const Wrapper = styled.div`
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    height: 100%;
`;

const Container = styled.div`
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 600px;
    padding-bottom: 20px;
`;

const Content = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    justify-content: center; 
    align-items: center; 
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
                title="구인정보"
                onClick={() => {
                    navigate('/FetchJob');
                }}/>
            <Button
                title="장애인고용공단정보"
                onClick={() => {
                    navigate('/Information');
                }}/>
            <Header title='장애인 인구 현황'/>
            <Container>
                <Content>
                    <KorMap data={data} />
                </Content>
                <Content>
                    <PopulationTable data={data} />
                </Content>
            </Container>
            <Header title='그래프'/>
            <FluctuationChart data={data} />
        </Wrapper>
    );
}

export default MainPage;
