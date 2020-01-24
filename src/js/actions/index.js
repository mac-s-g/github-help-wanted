import fetch from 'isomorphic-fetch'

import { formatIssueQuery, scrollToTopResults } from './../helpers'
import { constants } from './../constants'
import { history } from '../store/middleware'

export const SELECT_LANGUAGE = 'SELECT_LANGUAGE'
export const SELECT_LABEL = 'SELECT_LABEL'
export const SELECT_PAGE = 'SELECT_PAGE'
export const SELECT_SORT_ORDER = 'SELECT_SORT_ORDER'

export const UPDATE_SEARCH_PARAMS = 'UPDATE_SEARCH_PARAMS'

export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const RECEIVE_ISSUES_ERROR = 'RECEIVE_ISSUES_ERROR'

export const RECEIVE_MORE_ISSUES = 'RECEIVE_MORE_ISSUES'
export const REQUEST_MORE_ISSUES = 'REQUEST_MORE_ISSUES'

export const REQUEST_REPO = 'REQUEST_REPO'
export const RECEIVE_REPO = 'RECEIVE_REPO'
export const RECEIVE_REPO_ERROR = 'RECEIVE_REPO_ERROR'

export const selectLanguage = languages => ({
  type: SELECT_LANGUAGE,
  value: languages
})

export const selectLabels = labels => ({
  type: SELECT_LABEL,
  value: labels
})

export const selectPage = page => ({
  type: SELECT_PAGE,
  value: page
})

export const selectSortOrder = sort_order => ({
  type: SELECT_SORT_ORDER,
  value: sort_order
})

export const updateSearchParams = ({
  languages,
  labels,
  page,
  sort,
  order
}) => {
  const searchParams = new URLSearchParams({
    languages,
    labels,
    page,
    sort,
    order
  })
  history.push({
    search: '?' + searchParams.toString()
  })
  return { type: UPDATE_SEARCH_PARAMS }
}

const requestIssues = query_filters => ({
  type: REQUEST_ISSUES,
  request: query_filters
})

const receiveIssues = (query_filters, json) => ({
  type: RECEIVE_ISSUES,
  result: json,
  request: query_filters,
  receivedAt: Date.now()
})

const requestMoreIssues = query_filters => ({
  type: REQUEST_MORE_ISSUES,
  request: query_filters
})

const receiveMoreIssues = (query_filters, json) => ({
  type: RECEIVE_MORE_ISSUES,
  result: json,
  request: query_filters,
  receivedAt: Date.now()
})

const receiveIssuesError = (query_filters, error) => ({
  type: RECEIVE_ISSUES_ERROR,
  result: error,
  request: query_filters,
  receivedAt: Date.now()
})

export const fetchIssuesOnScroll = query_filters => {
  return dispatch => {
    dispatch(requestMoreIssues(query_filters))
    return fetch(formatIssueQuery(query_filters))
      .then(response => response.json())
      .then(json => dispatch(receiveMoreIssues(query_filters, json)))
      .catch(error => {
        console.log(
          'api error occurred while fetching issues',
          query_filters,
          error
        )
        dispatch(receiveIssuesError(query_filters, error))
      })
  }
}

export const fetchIssues = (query_filters, scroll_to_top = false) => {
  return dispatch => {
    dispatch(requestIssues(query_filters))
    return fetch(formatIssueQuery(query_filters))
      .then(response => response.json())
      .then(json => dispatch(receiveIssues(query_filters, json)))
      .then(() => {
        // When results are fetched, scroll to the top
        // for better user experience (issue #6).
        if (scroll_to_top) {
          scrollToTopResults()
        }
      })
      .catch(error => {
        console.log(
          'api error occurred while fetching issues',
          query_filters,
          error
        )
        dispatch(receiveIssuesError(query_filters, error))
      })
  }
}

const requestRepository = url => ({
  type: REQUEST_REPO,
  url: url
})

const receiveRepository = (url, json) => ({
  type: RECEIVE_REPO,
  result: json,
  url: url,
  receivedAt: Date.now()
})

const receiveRepositoryError = (url, error) => ({
  type: RECEIVE_REPO_ERROR,
  result: error,
  url: url,
  receivedAt: Date.now()
})

export const fetchRepository = url => {
  return dispatch => {
    dispatch(requestRepository(url))
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveRepository(url, json)))
      .catch(error => {
        console.log('api error occurred while fetching repository', url, error)
        dispatch(receiveRepositoryError(url, error))
      })
  }
}
