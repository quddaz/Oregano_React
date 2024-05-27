import React from 'react';
import styled from 'styled-components';

const GraphContainer = styled.div`
  margin-top: 20px;
`;

const PopulationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd; /* 표 전체에 선 적용 */
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd; /* 각 셀에 선 적용 */
`;

function formatNumber(number) {
  // 숫자를 1,000 형식으로 포맷팅
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function PopulationGraph({ data }) {

  const halfLength = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, halfLength);
  const secondHalf = data.slice(halfLength);

  return (
    <GraphContainer>
      <h2>인구수 표</h2>
      <PopulationTable className="population-table">
        <TableHead>
          <tr>
            <th>지역</th>
            <th>인구수</th>
            <th>지역</th>
            <th>인구수</th>
          </tr>
        </TableHead>
        <tbody>
          {firstHalf.map((item, index) => (
            <TableRow key={index}>
              <TableData>{item.C1_NM}</TableData>
              <TableData>{formatNumber(parseInt(item.DT))}</TableData>
              {secondHalf[index] && (
                <>
                  <TableData>{secondHalf[index].C1_NM}</TableData>
                  <TableData>{formatNumber(parseInt(secondHalf[index].DT))}</TableData>
                </>
              )}
            </TableRow>
          ))}
        </tbody>
      </PopulationTable>
    </GraphContainer>
  );
}

export default PopulationGraph;
