import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Job.css";

const regions = ['서울특별시','경기도','강원도','전라남도', '전라북도', '충청남도', '충청북도', '경상남도', '경상북도', '인천광역시', '광주광역시', '부산광역시', '대전광역시'];
const empTypes = ['상용직', '계약직'];

function Job() {
    const [jobList, setJobList] = useState([]); 
    const [region, setRegion] = useState("서울특별시"); 
    const [empType, setEmpType] =  useState("상용직");
    const [selectedJob, setSelectedJob] = useState(null); // 선택한 채용 정보

    useEffect(() => {
        fetchJobs();
    }, [region, empType]);

    const fetchJobs = () => {
        axios.get(`/fetchJobListings?region=${region}&empType=${empType}`)
            .then((res) => {
                setJobList(res.data.item);
            })
            .catch((error) => {
                console.error("Error fetching fetchJobListings listings:", error);
            });
    };

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };

    const handleEmpTypeChange = (event) => {
        setEmpType(event.target.value);
    };

    const handleJobItemClick = (job) => {
        setSelectedJob(job);
    };

    return (
        <div className="job-board-container">
            <select className="select-region" value={region} onChange={handleRegionChange}>
                {regions.map(regi => (
                    <option key={regi} value={regi}>{regi}</option>
                ))}
            </select>
            <select className="select-region" value={empType} onChange={handleEmpTypeChange}>
                {empTypes.map(emp => (
                    <option key={emp} value={emp}>{emp}</option>
                ))}
            </select>
            <p className="job-count">총 {jobList.length}건 검색되었습니다.</p>
            <ul className="job-list">
                {jobList.map((job, index) => (
                    <li className="job-item" key={index} onClick={() => handleJobItemClick(job)}>
                        <div className="job-title">{job.busplaName} : {job.jobNm}</div>
                        <div className="job-date">모집 기간: {job.termDate}</div>
                        <div className="job-detail">주소: {job.compAddr}</div>
                        <div className="job-detail">고용형태: {job.empType}</div>
                        <div className="job-detail">{job.salaryType}: {job.salary}</div>
                    </li>
                ))}
            </ul>
            {selectedJob && (
                <div className="job-detail">
                    <div>사업장 이름: {selectedJob.busplaName}</div>
                    <div>회사 주소: {selectedJob.compAddr}</div>
                    <div>고용 형태: {selectedJob.empType}</div>
                    <div>직무 이름: {selectedJob.jobNm}</div>
                    <div>등록 단체 이름: {selectedJob.regagnName}</div>
                    <div>요구 경력: {selectedJob.reqCareer}</div>
                    <div>요구 학력: {selectedJob.reqEduc}</div>
                    <div>{selectedJob.salaryType}: {selectedJob.salary}</div>
                    <div>모집 기간: {selectedJob.termDate}</div>
                </div>
            )}
        </div>
    );
}

export default Job;
