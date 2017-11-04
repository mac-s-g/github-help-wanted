import React from 'react'
import {connect} from 'react-redux'
import IssueFilters from './IssueFilters'
import IssueResults from './IssueResults'
import {
  Container,
  Header
} from 'semantic-ui-react'


const FilterList = (props) => (
  <Container text style={{ paddingTop: '7em' }}>
    <Header as='h1'>GitHub Help Wanted</Header>
    <p>Building tools to help connect developers to open source projects.</p>
    <p>This site is under construction.</p>

    <IssueFilters {...props} />
    <IssueResults />

  </Container>
)

export default FilterList
