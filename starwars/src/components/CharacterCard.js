import React from 'react';
import styled from 'styled-components';
import {CssBaseline, Container, Grid, Card, CardContent, Typography} from '@material-ui/core';


const CharacterCard = styled(Card)`&&{
    background: lightgrey;
    border: 5px solid ${props => (props.eyecolor)};
    /* filter:brightness(50%); */
    text-align: left;
    /* color:white; */
    transition: 0.3s;

    &:hover{
        transform: scale(1.1);
    }
}`

export default (props) =>{
    return(
        <CharacterCard eyecolor={props.data.eye_color}>
            <CardContent>
                <Typography variant="h5">{props.data.name}</Typography>
                <Typography variant="body1">{props.data.gender}</Typography>
                <Typography variant="body1">{props.data.height} cm</Typography>
                <Typography variant="body1">{props.data.mass} kg</Typography>
            </CardContent>
        </CharacterCard>
    )
}