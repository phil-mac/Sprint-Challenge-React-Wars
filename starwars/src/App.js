import React, {useState, useEffect} from 'react';
import CharacterCard from './components/CharacterCard';
import {CssBaseline, Container, Grid, Card, CardContent, Typography, InputBase, Button, ButtonGroup} from '@material-ui/core';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charactersState, setCharactersState] = useState([
    {name: 'Bob', gender: 'male', height: '170'},
    {name: 'Joe', gender: 'n/a', height: '45'},
    {name: 'Jess', gender: 'female', height: '260'},
    {name: 'Name', gender: 'male', height: 'height'},
    {name: 'Name', gender: 'n/a', height: 'height'},
    {name: 'Name', gender: 'female', height: 'height'},
    {name: 'Name', gender: 'male', height: 'height'},
    {name: 'Name', gender: 'n/a', height: 'height'},
    {name: 'Name', gender: 'female', height: 'height'},
    {name: 'Name', gender: 'male', height: 'height'},
    {name: 'Name', gender: 'n/a', height: 'height'}
  ]);

  const [searchState, setSearchState] = useState('');

  const [pageState, setPageState] = useState(1);

  function changePage(change){
    let newPage = pageState + change;
    if (newPage === 0) newPage = 1;
    console.log('new page: ' + newPage);
    setPageState(newPage);
  }

  useEffect(() => {
    const fetchCharacters = () =>{
      fetch(`https://swapi.co/api/people/?page=${pageState}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setCharactersState(data.results);
        })
        .catch(err => console.log(err));
    }
    fetchCharacters();
  }, [pageState])

  return (
    <Container className="App" max-width="md">
      <h1 className="Header">React Wars</h1>
      <InputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          style={{background: 'white', marginBottom: '20px', padding:'0 10px'}}
          onChange={(event) => {
            console.log(event.target.value);
            setSearchState(event.target.value.toLowerCase());
          }}
        />
        <br></br>
      <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="full-width contained primary button group"
          style={{background:'lightgrey', marginBottom: '20px'}}>
          <Button onClick={() => changePage(-1)} disabled={pageState <= 1}>{'<-- Prev'}</Button>
          <Button onClick={() => changePage(+1)} disabled={pageState >= 9}>{'Next -->'}</Button>
      </ButtonGroup>
      <Grid container spacing={5}>
      {
        charactersState.filter(character =>{
          return (character.name.toLowerCase().includes(searchState) || character.gender.includes(searchState) ||character.height.includes(searchState) || character.mass.includes(searchState))
        }).map((character, index) => {
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
