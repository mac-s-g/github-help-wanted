import fetch from 'isomorphic-fetch'

import { formatIssueQuery } from './../helpers'
import { constants } from './../constants'


export const SELECT_LANGUAGE = 'SELECT_LANGUAGE'
export const SELECT_LABEL = 'SELECT_LABEL'
export const SELECT_PAGE = 'SELECT_LABEL'

export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const RECEIVE_ISSUES_ERROR = 'RECEIVE_ISSUES_ERROR'

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


const receiveIssuesError = (query_filters, error) => ({
  type: RECEIVE_ISSUES_ERROR,
  result: error,
  receivedAt: Date.now()
})


export const fetchIssues = (
  query_filters,
  page,
  per_page
) => {
  return dispatch => {
    dispatch(requestIssues(query_filters))
    return fetch(formatIssueQuery(
        query_filters,
        page,
        per_page
      ))
      .then(response => response.json())
      .then(json => dispatch(
        receiveIssues(
          query_filters,
          json
        )
      ))
      .catch(error => {
        console.log(
          'api error occurred while fetching issues',
          query_filters,
          error
        )
        dispatch(receiveIssuesError())
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
      .then(json => dispatch(
        receiveRepository(
          url,
          json
        )
      ))
      .catch(error => {
        console.log(
          'api error occurred while fetching repository',
          url,
          error
        )
        dispatch(receiveRepositoryError(url, error))
      })
  }
}
