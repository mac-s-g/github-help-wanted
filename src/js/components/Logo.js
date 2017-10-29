import React from 'react'
import Badge from './Badge'
import Styled from 'styled-components'
import {constants} from './../constants'

const {colors} = constants
const {theme}  = colors

const Container = Styled.div`
  font-weight: bold;
  ${
    props => props.theme == 'dark'
    ? 'background-color: ' + theme.dark
    : ''
  };
  line-height: 1;
  color: white;
`

const Logo = (props) => (
  <Container theme={props.theme}>
    GitHub <Badge label="help-wanted" type="help_wanted" />
  </Container>
)

export default Logo