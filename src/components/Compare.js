import React from "react";
import styled from "styled-components";

const Compare = ({ firstCityData, secondCityData }) => {
  const filteredFirstCityData = firstCityData.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
  const filteredSecondCityData = secondCityData.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );
  const filteredNightFirstCityData = firstCityData.list.filter((item) =>
    item.dt_txt.includes("06:00:00")
  );
  const filteredNightSecondCityData = secondCityData.list.filter((item) =>
    item.dt_txt.includes("06:00:00")
  );

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th colSpan="2">Name</th>
            <th colSpan="2">Temp. Day °C</th>
            <th colSpan="2">Temp. Night °C</th>
            <th colSpan="2">Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{filteredSecondCityData[0].dt_txt.split(" ")[0]}</td>
            <td>{firstCityData.city.name}</td>
            <td>{secondCityData.city.name}</td>
            <td>{Math.floor(filteredFirstCityData[0].main.temp - 273.15)}</td>
            <td>{Math.floor(filteredSecondCityData[0].main.temp - 273.15)}</td>
            <td>
              {Math.floor(filteredNightFirstCityData[0].main.temp - 273.15)}
            </td>
            <td>
              {Math.floor(filteredNightSecondCityData[0].main.temp - 273.15)}
            </td>
            <td>{filteredFirstCityData[0].weather[0].main}</td>
            <td>{filteredSecondCityData[0].weather[0].main}</td>
          </tr>
          <tr>
            <td>{filteredSecondCityData[1].dt_txt.split(" ")[0]}</td>
            <td>{firstCityData.city.name}</td>
            <td>{secondCityData.city.name}</td>
            <td>{Math.floor(filteredFirstCityData[1].main.temp - 273.15)}</td>
            <td>{Math.floor(filteredSecondCityData[1].main.temp - 273.15)}</td>
            <td>
              {Math.floor(filteredNightFirstCityData[1].main.temp - 273.15)}
            </td>
            <td>
              {Math.floor(filteredNightSecondCityData[1].main.temp - 273.15)}
            </td>
            <td>{filteredFirstCityData[1].weather[0].main}</td>
            <td>{filteredSecondCityData[1].weather[0].main}</td>
          </tr>
          <tr>
            <td>{filteredSecondCityData[2].dt_txt.split(" ")[0]}</td>
            <td>{firstCityData.city.name}</td>
            <td>{secondCityData.city.name}</td>
            <td>{Math.floor(filteredFirstCityData[2].main.temp - 273.15)}</td>
            <td>{Math.floor(filteredSecondCityData[2].main.temp - 273.15)}</td>
            <td>
              {Math.floor(filteredNightFirstCityData[2].main.temp - 273.15)}
            </td>
            <td>
              {Math.floor(filteredNightSecondCityData[2].main.temp - 273.15)}
            </td>
            <td>{filteredFirstCityData[2].weather[0].main}</td>
            <td>{filteredSecondCityData[2].weather[0].main}</td>
          </tr>
        </tbody>
      </Table>
    </TableContainer>
  );
};
const TableContainer = styled.div`
  overflow-x: auto;
`;
const Table = styled.table`
  font-family: inherit;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  border: 2px solid #555353;
  text-align: center;
  border-collapse: collapse;
  height: 300px;
  tr {
    border-bottom: 1px solid #ccc;
  }
  th,
  td {
    text-align: left;
    padding: 1rem;
    border-right: 1px solid#ccc;
    text-transform: capitalize;
  }
  td:nth-of-type(even) {
    background: lightblue;
  }
  td:nth-of-type(odd) {
    background: #0e7c86;
  }
  td:first-child {
    background: #dae2ec;
  }
`;
export default Compare;
