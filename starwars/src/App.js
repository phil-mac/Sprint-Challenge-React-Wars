import React, {useState, useEffect} from 'react';
import CharacterCard from './components/CharacterCard';
import {CssBaseline, Container, Grid, Card, CardContent, Typography} from '@material-ui/core';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charactersState, setCharactersState] = useState([
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'},
    {name: 'Name', gender: 'gender', height: 'height'}
  ]);

  useEffect(() => {
    const fetchCharacters = () =>{
      fetch('https://swapi.co/api/people/')
        .then(res => res.json())
        .then(data => {
          console.log(data.results);
          setCharactersState(data.results);
        })
        .catch(err => console.log(err));
    }
    fetchCharacters();
  }, [])

  return (
    <Container className="App" max-width="md">
      <h1 className="Header">React Wars</h1>
      <Grid container spacing={10}>
      {
        charactersState.map((character, index) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <CharacterCard key={index} data={character} />
            </Grid>
          )
        })
      }
      </Grid>
    </Container>
  );
}

export default App;
