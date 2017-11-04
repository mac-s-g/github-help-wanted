let default_filters = {
  language: false
}

const filters = (state = default_filters, action) => {
  switch (action.type) {
    case 'FILTER_LANGUAGE':
      return {
        ...state,
        language: action.value
      }
    default:
      return state
  }
}

export default filters