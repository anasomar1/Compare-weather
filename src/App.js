import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Compare from "./components/Compare";

import GlobalStyles from "./GlobalStyles";
const App = () => {
  const [query, setQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");
  const [firstCity, setFirstCity] = useState(query);
  const [secondCity, setSecondCity] = useState(secondQuery);
  const [isLoading, setIsLoading] = useState(true);
  const firstCityInfo = `https://api.openweathermap.org/data/2.5/forecast?q=${firstCity}&appid=129caec24c3baf7ececc36c32c164313`;
  const secondCityInfo = `https://api.openweathermap.org/data/2.5/forecast?q=${secondCity}&appid=129caec24c3baf7ececc36c32c164313`;
  const [firstCityData, setFirstCityData] = useState("");
  const [secondCityData, setSecondCityData] = useState("");
  const firstInputHandler = (e) => {
    setQuery(e.target.value);
  };

  const secondInputHandler = (e) => {
    setSecondQuery(e.target.value);
  };

  const compareHandler = async (e) => {
    e.preventDefault();
    await fetch(firstCityInfo)
      .then((res) => res.json())
      .then((info) => setFirstCityData(info))
      .catch(() => alert("failed to find city"));

    await fetch(secondCityInfo)
      .then((res) => res.json())
      .then((info) => setSecondCityData(info))
      .catch(() => alert("failed to find city"));

    setIsLoading(false);
  };

  useEffect(() => {
    setFirstCity(query);
    setSecondCity(secondQuery);
  }, [query, secondQuery]);
  return (
    <div>
      <GlobalStyles />
      <Container>
        <Content>
          <h3>
            Compare the weather for the following 3 days between any two cities.
          </h3>
          <Form>
            <InputBox
              placeholder="First city..."
              onChange={firstInputHandler}
              value={query}
              required
            />
            <InputBox
              placeholder="Second city..."
              onChange={secondInputHandler}
              value={secondQuery}
              required
            />

            <Button onClick={compareHandler}>Compare</Button>
          </Form>
          {isLoading ? (
            ``
          ) : firstCityData.cod === "200" && secondCityData.cod === "200" ? (
            <Compare
              firstCityData={firstCityData}
              secondCityData={secondCityData}
            />
          ) : (
            <h3 style={{ marginTop: "2rem" }}>
              Please make sure city names are correct
            </h3>
          )}
        </Content>
      </Container>
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 5rem;
  height: 80vh;
  font-family: "Poppins", sans-serif;
  background: hsl(212, 33%, 89%);

  .alert {
    margin: 2rem 0;
    color: #ad9a9a;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    color: #102a43;
    margin-bottom: 1rem;
  }
  p {
    color: #334e68;
  }

  .btn {
    font-weight: bold;
  }
`;

const Form = styled.form`
  margin-top: 2rem;

  @media (max-width: 766px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    Input {
      margin-bottom: 1rem;
    }
  }
`;

const InputBox = styled.input`
  font-family: inherit;
  font-size: 16px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 1rem;
  margin-right: 2rem;
`;

const Button = styled.button`
  font-family: inherit;
  font-size: 16px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 1rem;
  background: #044e54;
  color: hsl(212, 33%, 89%);
  margin-right: 2rem;

  &:hover {
    background: #3a8086;
  }
  &:active {
    scale: 0.98;
  }
`;

export default App;
