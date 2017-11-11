import { constants } from './../constants'

const { issues_url } = constants.links.api
const { github_url } = constants.links.internal

const formatIssueQueryParams = (filter, values) => {
  return values.map((value) => {
    return filter + ':'
      + '"' + encodeURIComponent(value) + '"'

  }).join('+') + ' '
}

export const formatIssueQuery = (
    query_filters, page, per_page, sort='updated'
) => (
  issues_url
    + '?q='
    + 'is:issue '
    + 'is:open '
    + formatIssueQueryParams('language', query_filters['languages'])
    + formatIssueQueryParams('label', query_filters['labels'])
    + '&page=' + page
    + '&per_page=' + per_page
    + '&sort=' + sort
    + '&order=desc'
)


export const formatRepositoryName = repository_url => (
  repository_url.replace(/.*repos\//g, '')
)

export const formatRepositoryUrl = repository_url => (
  github_url + repository_url.replace(/.*repos\//g, '')
)


export const isset = (variable) => (variable !== undefined)