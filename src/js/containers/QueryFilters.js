import React from 'react'
import { connect } from 'react-redux'
import {
  selectLanguage,
  selectLabels,
  selectOrder,
  selectPage,
  fetchIssues
} from './../actions'

import IssueFilters from './../components/IssueFilters/'


const mapDispatchToProps = dispatch => {
  return {
    onInitialMount: (query_filters) => {
      //initial result population
      dispatch(fetchIssues(query_filters))
    },
    onLanguageSelect: (query_filters) => {
      dispatch(selectPage(query_filters.page))
      dispatch(selectLanguage(query_filters.languages))
      dispatch(fetchIssues(query_filters))
    },
    onLabelSelect: (query_filters) => {
      dispatch(selectPage(query_filters.page))
      dispatch(selectLabels(query_filters.labels))
      dispatch(fetchIssues(query_filters))
    },
    onOrderSelect: (query_filters) => {
      dispatch(selectPage(query_filters.page))
      dispatch(selectOrder(query_filters.order))
      dispatch(fetchIssues(query_filters))
    },
    onPageSelect: (query_filters) => {
      //trigger scroll to top when results are returned
      const scroll_to_top = true
      dispatch(selectPage(query_filters.page))
      dispatch(fetchIssues(query_filters, scroll_to_top))
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedLanguages: state.issueFilters.languages,
    selectedLabels: state.issueFilters.labels,
    selectedPage: state.issueFilters.page,
    selectedPerPage: state.issueFilters.results_per_page,
    selectedOrder: state.issueFilters.order,
    totalResults: state.issueResults.total_count
  }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueFilters)


export default Filters
