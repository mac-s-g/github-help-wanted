import React from 'react'
import { connect } from 'react-redux'
import {
  selectLanguage,
  selectLabels,
  fetchIssues
} from './../actions'

import IssueFilters from './../components/IssueFilters'

const mapDispatchToProps = dispatch => {
  return {
    onLanguageSelect: (query_filters, page, per_page) => {
      dispatch(selectLanguage(query_filters.languages))
      dispatch(fetchIssues(
        query_filters, page, per_page
      ))
    },
    onLabelSelect: (query_filters, page, per_page) => {
      dispatch(selectLabels(query_filters.labels))
      dispatch(fetchIssues(
        query_filters, page, per_page
      ))
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedLanguages: state.issueFilters.languages,
    selectedLabels: state.issueFilters.labels,
    selectedPage: state.issueFilters.page,
    selectedPerPage: state.issueFilters.results_per_page,
  }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueFilters)


export default Filters
