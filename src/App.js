import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./styles.css";
import MyCard from "./Components/MyCard";
import Axios from "axios";
const App = () => {
  const [details, setDetails] = useState([]);
  const fetchDetails = async () => {
    const { data } = await Axios.get("https://randomuser.me/api/");
    const details = data.results[0];
    setDetails(details);
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Container className="text-center">
      <MyCard details={details} />
    </Container>
  );
};

export default App;
