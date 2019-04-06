import { constants } from './../constants'
import {
  SELECT_LANGUAGE,
  SELECT_LABEL,
  SELECT_PAGE,
  SELECT_ORDER
} from './../actions'

const { page, per_page, sort_order } = constants.app_defaults

let default_filters = {
  languages: [],
  labels: ["help wanted"],
  page: page,
  results_per_page: per_page,
  order: sort_order
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
        page: action.value
      }
    case SELECT_ORDER:
      return {
        ...state,
        order: action.value
      }
    default:
      return state
  }
}

export default issueFilters