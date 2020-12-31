import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Compare from "./components/Compare";

import GlobalStyles from "./GlobalStyles";
const App = () => {
  const [query, setQuery] = useState("Amman");
  const [secondQuery, setSecondQuery] = useState("Paris");
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
    const firstCityData = await fetch(firstCityInfo)
      .then((res) => res.json())
      .then((info) => info);
    const secondCityData = await fetch(secondCityInfo)
      .then((res) => res.json())
      .then((info) => info);

    setFirstCityData(firstCityData);
    setSecondCityData(secondCityData);
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
            <InputBox onChange={firstInputHandler} value={query} />
            <InputBox onChange={secondInputHandler} value={secondQuery} />

            <Button onClick={compareHandler}>Compare</Button>
          </Form>
          {isLoading ? (
            <h3 class="alert">Please click compare</h3>
          ) : (
            <Compare
              firstCityData={firstCityData}
              secondCityData={secondCityData}
            />
          )}
        </Content>
      </Container>
      );
    </div>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 5rem;
  height: 100vh;
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
