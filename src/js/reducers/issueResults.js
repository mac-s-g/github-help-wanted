import {
  REQUEST_ISSUES,
  RECEIVE_ISSUES,
  RECEIVE_ISSUES_ERROR
} from './../actions'


const initial_state = {
  fetch_in_progress: false,
  fetch_issues_error: false,
  rate_limit_exceeded: false,
  incomplete_results: false,
  total_count: 0,
  items: []
}

const exceeded_limit_url = "https://developer.github.com/v3/#rate-limiting"

const issueResults = (state = initial_state, action) => {
  switch (action.type) {
    case REQUEST_ISSUES:
      return {
        ...state,
        fetch_in_progress: true,
        fetch_issues_error: false,
        rate_limit_exceeded: false,
        incomplete_results: false,
        total_count: 0,
        items: []
      }
    case RECEIVE_ISSUES:
      if (action.result.items !== undefined) {
        return {
          ...state,
          fetch_in_progress: false,
          fetch_issues_error: false,
          rate_limit_exceeded: false,
          incomplete_results: action.result.incomplete_results,
          total_count:  action.result.total_count,
          items:  action.result.items
        }
      } //else fall through to error block
    case RECEIVE_ISSUES_ERROR:
      return {
        ...state,
        fetch_in_progress: false,
        fetch_issues_error: true,
        rate_limit_exceeded: (
          action.result
          && action.result.documentation_url == exceeded_limit_url
        ),
        incomplete_results: false,
        total_count: 0,
        items: []
      }
    default:
      return {...state}
  }
}

export default issueResults