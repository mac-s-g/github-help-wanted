import React from 'react'
import { connect } from 'react-redux'
import {
  selectLanguage,
  selectLabels,
  selectPage,
  selectSortOrder,
  updateSearchParams,
  fetchIssues
} from './../actions'

import IssueFilters from './../components/IssueFilters/'


const mapDispatchToProps = dispatch => {
  return {
    onInitialMount: (query_filters) => {
      dispatch(selectPage(query_filters.page))
      dispatch(selectLanguage(query_filters.languages))
      dispatch(selectLabels(query_filters.labels))
      dispatch(selectSortOrder({
        sort: query_filters.sort,
        order: query_filters.order
      }))
      //initial result population
      dispatch(fetchIssues(query_filters))
    },
    onLanguageSelect: (query_filters) => {
      dispatch(selectPage(query_filters.page))
      dispatch(selectLanguage(query_filters.languages))
      dispatch(updateSearchParams(query_filters))
      dispatch(fetchIssues(query_filters))
    },
    onLabelSelect: (query_filters) => {
      dispatch(selectPage(query_filters.page))
      dispatch(selectLabels(query_filters.labels))
      dispatch(updateSearchParams(query_filters))
      dispatch(fetchIssues(query_filters))
    },
    onSortOrderSelect: (query_filters) => {
      dispatch(selectPage(query_filters.page))
      dispatch(selectSortOrder({
        sort: query_filters.sort,
        order: query_filters.order
      }))
      dispatch(updateSearchParams(query_filters))
      dispatch(fetchIssues(query_filters))
    },
    onPageSelect: (query_filters) => {
      //trigger scroll to top when results are returned
      const scroll_to_top = true
      dispatch(selectPage(query_filters.page))
      dispatch(updateSearchParams(query_filters))
      dispatch(fetchIssues(query_filters, scroll_to_top))
    }
  }
}

const mapStateToProps = state => {
  const selectedSort = state.issueFilters.sort
  const selectedOrder = state.issueFilters.order
  const selectedSortOrder = '&sort=' + selectedSort + '&order=' + selectedOrder
  return {
    selectedLanguages: state.issueFilters.languages,
    selectedLabels: state.issueFilters.labels,
    selectedPage: state.issueFilters.page,
    selectedPerPage: state.issueFilters.results_per_page,
    selectedSort,
    selectedOrder,
    selectedSortOrder,
    totalResults: state.issueResults.total_count,
    location: state.router.location
  }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueFilters)


export default Filters
