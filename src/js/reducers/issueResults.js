import {
  REQUEST_ISSUES,
  RECEIVE_ISSUES,
  RECEIVE_ISSUES_ERROR
} from './../actions'


const initial_state = {
  fetch_in_progress: false,
  fetch_issues_error: false,
  incomplete_results: false,
  total_count: 0,
  items: []
}

const issueResults = (state = initial_state, action) => {
  switch (action.type) {
    case REQUEST_ISSUES:
      return {
        ...state,
        fetch_in_progress: true,
        fetch_issues_error: false,
        incomplete_results: false,
        total_count: 0,
        items: []
      }
    case RECEIVE_ISSUES:
      return {
        ...state,
        fetch_in_progress: false,
        fetch_issues_error: false,
        incomplete_results: action.result.incomplete_results,
        total_count:  action.result.total_count,
        items:  action.result.items
      }
    case RECEIVE_ISSUES_ERROR:
      return {
        ...state,
        fetch_in_progress: false,
        fetch_issues_error: true,
        incomplete_results: false,
        total_count: 0,
        items: []
      }
    default:
      return {...state}
  }
}

export default issueResults