import React from 'react'
import { connect } from 'react-redux'
import {
  fetchRepository
} from './../actions'

import IssueResults from './../components/IssueResults/'

// todo: use mixed case for all props to improve readability
const mapStateToProps = state => ({
  ...state.issueResults,
  repositories: state.repositories.results
})

const mapDispatchToProps = dispatch => ({
  fetchRepository: url => dispatch(fetchRepository(url))
})

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueResults)


export default Results
