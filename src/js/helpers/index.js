import moment from 'moment'

import { constants } from './../constants'

const { issues_url } = constants.links.api
const { github_url } = constants.links.internal

const formatIssueQueryParams = (filter, values) => {
  return (values.length ? ' ' : '')
    + values.map((value) => {
      return filter + ':'
        + '"' + encodeURIComponent(value) + '"'

    }).join('+')
}

export const formatIssueQuery = ({
    languages, labels, page, per_page, order
}) => (
  issues_url
    + '?q=is:issue is:open'
    + formatIssueQueryParams('language', languages)
    + formatIssueQueryParams('label', labels)
    + '&page=' + page
    + '&per_page=' + per_page
    + order
)


export const formatRepositoryName = repository_url => (
  repository_url.replace(/.*repos\//g, '')
)

export const formatRepositoryUrl = repository_url => (
  github_url + repository_url.replace(/.*repos\//g, '')
)


export const isset = (variable) => (
  variable !== null && variable !== undefined
)

export const formatDateForDisplay = (date_string) => {
  return moment(date_string).format('llll')
}

export const formatNumberForDisplay = (number) => {
  return new Intl.NumberFormat().format(number)
}

export function scrollToTopResults() {
  const issueListDOMComponent = document.querySelector('.issue-list')
  if (issueListDOMComponent) {
    issueListDOMComponent.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
