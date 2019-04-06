import React from 'react'

import { Container } from 'semantic-ui-react'

import ButtonSelect from './../inputs/ButtonSelect'

import { constants } from './../../constants'

const { sort_order } = constants.search_filters

const ResultOrder = ({value, onChange}) => (
  <Container
    style={{marginTop: '20px'}}
    textAlign='right' >
    <ButtonSelect
      onChange={onChange}
      options={sort_order}
      value={value} />
  </Container>
)

export default ResultOrder