import fetch from 'isomorphic-fetch'

import { formatIssueQuery } from './../helpers'
import { constants } from './../constants'

const { access_token } = constants.project_info;


export const SELECT_LANGUAGE = 'SELECT_LANGUAGE'
export const SELECT_LABEL = 'SELECT_LABEL'
export const SELECT_PAGE = 'SELECT_LABEL'
export const REQUEST_ISSUES = 'REQUEST_ISSUES'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const RECEIVE_ISSUES_ERROR = 'RECEIVE_ISSUES_ERROR'

export const REQUEST_LABELS = 'REQUEST_LABELS'
export const RECEIVE_LABELS = 'RECEIVE_LABELS'
export const RECEIVE_LABELS_ERROR = 'RECEIVE_LABELS_ERROR'

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
  type: RECEIVE_ERROR,
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

const requestLabels = url => ({
  type: REQUEST_LABELS,
  url: url
})

const receiveLabels = (url, results) => ({
  type: RECEIVE_LABELS,
  url: url,
  results: results
})

const receiveLabelsError = (url, error) => ({
  type: RECEIVE_LABELS_ERROR,
  url: url,
  error: error
})

export const fetchLabels = url => {
  return dispatch => {
    dispatch(requestLabels(url), {
      access_token: access_token
    })
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(
        receiveLabels(
          url,
          json
        )
      ))
      .catch(error => {
        console.log(
          'api error occurred while fetching labels',
          url,
          error
        )
        dispatch(receiveLabelsError(url, error))
      })
  }
}