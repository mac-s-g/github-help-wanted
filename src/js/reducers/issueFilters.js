import { constants } from './../constants'
import {
  SELECT_LANGUAGE,
  SELECT_LABEL,
  SELECT_PAGE
} from './../actions'

const { page, per_page } = constants.app_defaults

let default_filters = {
  languages: [],
  labels: ["help wanted"],
  page: page,
  results_per_page: per_page
}


const issueFilters = (state = default_filters, action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      return {
        ...state,
        languages: action.value
      }
    case SELECT_LABEL:
      return {
        ...state,
        labels: action.value
      }
    case SELECT_PAGE:
      return {
        ...state,
        page: 1
      }
    default:
      return state
  }
}

export default issueFilters