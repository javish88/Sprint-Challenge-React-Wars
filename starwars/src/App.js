import React, {useState, useEffect} from 'react';
import axios from "axios";
import StarWarsCard from "./components/StarWarsCard";
import {Row, Spinner} from 'reactstrap';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState();
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() => {
    axios
    .get("https:///swapi.co/api/people/")
    .then(response => {
      setPeople(response.data.results);
    })
    .catch(error => `Error: ${error}`);
  }, []);

  if (people !== undefined) {
    return (
      <div className="App">
        <h1 className="Header">React Wars Pew Pew Pew</h1>
        <Row>
          {people.map((person, count) => {
            return <StarWarsCard key={count} person={person}/>
          })}
        </Row>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="loader">
          <h2>Loading, Waiting to go into HyperDrive</h2>
          <Spinner size="sm" color="light"/>
        </div>
      </div>
    );
  }
};

export default App;
