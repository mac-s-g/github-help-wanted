import React from 'react'
import Badge from './Badge'
import Styled from 'styled-components'
import {constants} from './../constants'

const {colors} = constants
const {theme}  = colors

const Container = Styled.div`
  font-weight: bold;
  line-height: 1;
  color: white;
  font-size: ${
    props => props.size == 'large'
    ? '22px'
    : '14px'
  }
  ${
    props => props.theme == 'dark'
    ? 'background-color: ' + theme.dark
    : ''
  };
`

const Logo = (props) => (
  <Container theme={props.theme} size={props.size}>
    GitHub <Badge label="help wanted" type="help_wanted" />
  </Container>
)

export default Logo