import React from 'react'
import Styled from 'styled-components'
import { constants } from './../constants'

const { badge } = constants;

const BadgeContainer = Styled.div`
  display: inline-block;
  padding: 1px 4px 2px 4px;
  margin: 0px 0px 0px 4px;
  font-weight: bold;
  border-radius: 2px;
  color: white;
  background-color: ${
    props => props.type && badge[props.type]
    ? badge[props.type]
    : '#aaa'
  };
`

//color inverter calculator
//source: https://codepen.io/Z1MM32M4N/pen/YXxvRq
const invertColor = (color) => {
  let rgb = parseInt(color, 16)
  let r = (rgb >> 16) & 0xff
  let g = (rgb >>  8) & 0xff
  let b = (rgb >>  0) & 0xff

  let luminescence = 0.2126 * r + 0.7152 * g + 0.0722 * b

  if (luminescence < 140) {
    return 'white'
  } else {
    return '#303300'
  }
}

const Badge = (props) => (
  <BadgeContainer
    type={props.type}
    style={{
      ...props.style,
      backgroundColor: '#' + props.color,
      color: invertColor(props.color)
    }}
    className={props.className} >
    {props.label}
  </BadgeContainer>
)

export default Badge