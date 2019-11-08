import React from 'react';
import styled from 'styled-components';
import {CssBaseline, Container, Grid, Card, CardContent, Typography} from '@material-ui/core';


const CharacterCard = styled(Card)`&&{
    background: lightgrey;
    text-align: left;

    transition: 0.3s;

    &:hover{
        transform: scale(1.1);
    }
}`

export default (props) =>{
    return(
        <CharacterCard>
            <CardContent>
                <Typography variant="h5">{props.data.name}</Typography>
                <Typography variant="body1">gender: {props.data.gender}</Typography>
                <Typography variant="body1">height: {props.data.height} cm</Typography>
                <Typography variant="body1">mass: {props.data.mass} kg</Typography>
            </CardContent>
        </CharacterCard>
    )
}