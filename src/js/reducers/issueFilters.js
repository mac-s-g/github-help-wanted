import { constants } from './../constants'
import {
  SELECT_LANGUAGE,
  SELECT_LABEL,
  SELECT_PAGE,
  SELECT_SORT_ORDER,
  selectNoAssignee
} from './../actions'

const { page, per_page, sort, order } = constants.app_defaults

let default_filters = {
  languages: [],
  labels: ['help wanted'],
  page: page,
  results_per_page: per_page,
  sort,
  order,
  noAssignee: false
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
    case SELECT_SORT_ORDER:
      const sort_order = new URLSearchParams(action.value)
      return {
        ...state,
        sort: sort_order.get('sort'),
        order: sort_order.get('order')
      }
    case selectNoAssignee:
      return {
        ...state,
        noAssignee: action.value
      }
    default:
      return state
  }
}

export default issueFilters
