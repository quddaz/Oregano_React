import React from "react";
import './assistanceStyle.css';

function JobSuccessPackage() {
    return (
        <details>
            <summary>장애인 취업성공 패키지</summary>
            <h1>장애인 취업성공패키지</h1>

            <h2>장애인 취업성공패키지란?</h2>
            <p>장애인에게 성공적인 취업과 직업적응을 지원하기 위해 단계별 통합적인 서비스를 제공하는 전문적인 취업지원프로그램입니다.</p>

            <h2>지원신청</h2>
            <h3>신청대상</h3>
            <p>취업을 희망하는 만18세 이상~69세 이하 장애인</p>
            <ul>
                <li>「장애인복지법 시행령」 제2조에 따른 장애인 기준에 해당하는 자</li>
                <li>「국가유공자 등 예우 및 지원에 관한 법률 시행령」 제14조제3항에 따른 상이등급 기준에 해당하는 자</li>
            </ul>

            <h3>참여제한</h3>
            <ul>
                <li>취업의지가 없거나 직업훈련에만 관심 있는 경우</li>
                <li>고등학교·대학교 재학 중인 경우 (졸업예정자 및 학점은행제, 사이버대, 방송통신고, 방송통신대, 야간대학 재학생은 참여 가능)</li>
                <li>주30시간(중증장애인 또는 여성장애인 주 35시간) 이상 고용보험 가입 근로자</li>
                <li>취업성공패키지 참여한 경우 (중단일 1년 6개월, 기간만료(미취업)일 1년, 취(창)업일 1년 이후 참여 가능)</li>
                <li>외국인 (출입국관리법상 체류자격 F-2(거주)·F-5(영주)·F-6(결혼이민) 및 국적법 제4조에 따라 귀화 허가받은자는 참여 가능)</li>
                <li>이 외 제한대상은 공단 취업성공패키지 담당자와 확인</li>
            </ul>

            <h2>참여절차</h2>
            <img src="https://www.kead.or.kr/assets/image/diagram/disabledSupport/service01_03_08_2.png" alt=""/>

            <h2>참여방법</h2>
            <p>상세한 선정요건 및 신청서류는 가까운 소속기관에 문의(전화: 1588-1519) 하시면 참여를 도와드리겠습니다. 연락처는 하단을 참고하시면 됩니다.</p>

            <h2>지원내용</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>단계</th>
                        <th>프로그램</th>
                        <th>내용</th>
                        <th>지원</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1단계 (1개월 이내)</td>
                        <td>상담 및 취업활동 계획</td>
                        <td>
                            <ul>
                                <li>초기상담 및 직업평가, 개인별 취업활동 계획(IAP) 수립 (2회 이상 상담 실시)</li>
                            </ul>
                        </td>
                        <td><ul><li>개인별취업활동계획(IAP) 수립 후 참여수당 15만원 지급</li></ul></td>
                    </tr>
                    <tr>
                        <td>2단계 (12개월 이내)</td>
                        <td>취업역량 강화</td>
                        <td>
                            <ul>
                                <li>지피지기(취업코칭) 프로그램 양성 및 특화훈련 참여 (공단 직업능력개발원, 훈련센터 등)</li>
                                <li>장애인 취업지원프로그램 참여(지원고용 등)</li>
                                <li>내일배움카드 훈련 연계</li>
                                <li>생계급여 일반수급자의 경우 내일배움카드 발급 및 훈련 제한 (공단 훈련 참여 가능)</li>
                                <li>취업알선</li>
                                <li>[저소득층] 자기주도적 구직활동 계획 수립</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>지피지기 프로그램 수료시 5만원 ~ 10만원 지급</li>
                                <li>훈련참여수당 일 18,000원 (월 최대 284,000원)</li>
                                <li>구직촉진수당 [저소득층] 월 50만원 (최대 300만원)</li>
                                <li>조기 취업시 (3회차~5회차) 조기취업성공수당 지급</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>3단계 (6개월 이내)</td>
                        <td>고용 안정 및 유지</td>
                        <td>
                            <ul>
                                <li>[취업자] 직장적응 및 장기근속 격려를 위한 사후관리 지원</li>
                                <li>[미취업자] 일자리 정보 제공으로 취업 독려</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>취업성공수당</li>
                                <li>3개월 근속: 30만원</li>
                                <li>6개월 근속: 40만원</li>
                                <li>12개월 근속: 80만원</li>
                                <li>최대 150만원 지급</li>
                                <li>* 고용보험 가입 및 최저임금 이상 일자리, 주 30시간 (중증 15시간) 이상 근로 시 지급</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </details>
    );
}

export default JobSuccessPackage;
