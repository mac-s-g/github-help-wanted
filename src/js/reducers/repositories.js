import {
  REQUEST_REPO,
  RECEIVE_REPO,
  RECEIVE_REPO_ERROR
} from './../actions'


const initial_state = {
  fetch_in_progress: false,
  fetch_issues_error: false,
  results: {}
}

const repositories = (state = initial_state, action) => {
  switch (action.type) {
    case REQUEST_REPO:
      return {
        fetch_in_progress: true,
        fetch_issues_error: false,
        results: {
          ...state.results,
          [action.url]: false
        }
      }
    case RECEIVE_REPO:
      return {
        fetch_in_progress: false,
        fetch_issues_error: false,
        results: {
          ...state.results,
          [action.url]: action.result
        }
      }
    case RECEIVE_REPO_ERROR:
      return {
        fetch_in_progress: false,
        fetch_issues_error: true,
        results: {
          ...state.results,
          [action.url]: false
        }
      }
    default:
      return {...state}
  }
}

export default repositories