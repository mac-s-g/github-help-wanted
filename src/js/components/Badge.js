import React from 'react'
import Styled from 'styled-components'
import { constants } from './../constants'

const { badge } = constants;

const Container = Styled.div`
    display: inline-block;
    padding: 1px 4px 2px 4px;
    margin: 0px 0px 0px 4px;
    font-weight: 400;
    border-radius: 2px;
    color: white;
    background-color: ${
        props => props.type && badge[props.type]
        ? badge[props.type]
        : '#eee'
    };
`

const Badge = (props) => (
    <Container type={props.type}>
        {props.label}
    </Container>
)

export default Badge