import React from 'react'
import { connect } from 'react-redux'
import {
  fetchLabels
} from './../actions'

import IssueResults from './../components/IssueResults'


const mapStateToProps = state => ({...state.issueResults})

const mapDispatchToProps = dispatch => ({
  fetchLabels: url => dispatch(fetchLabels(url))
})

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueResults)


export default Results
