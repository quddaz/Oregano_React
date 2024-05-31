import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Job.css";
import JobInfoItem from './JobInfoItem';

const regions = ['서울특별시', '경기도', '강원도', '전라남도', '전라북도', '충청남도', '충청북도', '경상남도', '경상북도', '인천광역시', '광주광역시', '부산광역시', '대전광역시'];
const empTypes = ['상용직', '계약직'];

function Job() {
    const [jobList, setJobList] = useState([]);
    const [region, setRegion] = useState("서울특별시");
    const [empType, setEmpType] = useState("상용직");
    const [selectedJob, setSelectedJob] = useState(null);

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
            <div className="job-list-container">
                <div className="filters">
                    <label className="filter-label">지역</label>
                    <select className="select-region" value={region} onChange={handleRegionChange}>
                        {regions.map(regi => (
                            <option key={regi} value={regi}>{regi}</option>
                        ))}
                    </select>
                    <label className="filter-label">고용형태</label>
                    <div className="radio-group">
                        {empTypes.map(emp => (
                            <label key={emp} className="radio-label">
                                <input
                                    type="radio"
                                    value={emp}
                                    checked={empType === emp}
                                    onChange={handleEmpTypeChange}
                                />
                                {emp}
                            </label>
                        ))}
                    </div>
                    <p className="job-count">총 {jobList.length}건 검색되었습니다.</p>
                </div>
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
            </div>
            <div className="job-detail-container">
                <h2>모집정보</h2>
                {selectedJob ? (
                    <div className="job-info">
                        <JobInfoItem title="사업장 이름" content={selectedJob.busplaName} />
                        <JobInfoItem title="회사 주소" content={selectedJob.compAddr} />
                        <JobInfoItem title="고용 형태" content={selectedJob.empType} />
                        <JobInfoItem title="직무 이름" content={selectedJob.jobNm} />
                        <JobInfoItem title="등록 단체 이름" content={selectedJob.regagnName} />
                        <JobInfoItem title="요구 경력" content={selectedJob.reqCareer} />
                        <JobInfoItem title="요구 학력" content={selectedJob.reqEduc} />
                        <JobInfoItem title={selectedJob.salaryType} content={selectedJob.salary} />
                        <JobInfoItem title="모집 기간" content={selectedJob.termDate} />
                    </div>
                ) : (
                    <p className="job-detail-placeholder">채용 정보를 선택하세요.</p>
                )}
            </div>
        </div>
    );
}

export default Job;
