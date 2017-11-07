import { constants } from './../constants'

const { issues_url } = constants.links.api

const formatIssueQueryParams = (filter, values) => {
  return values.map((value) => {
    return filter + ':'
      + '"' + encodeURIComponent(value) + '"'

  }).join('+')
}

export const formatIssueQuery = (
    query_filters, page, per_page
) => (
  issues_url
    + '?q='
    + 'is:issue '
    + 'is:open '
    + formatIssueQueryParams('language', query_filters['languages'])
    + formatIssueQueryParams('label', query_filters['labels'])
    + '&page=' + page
    + '&per_page=' + per_page
)


export const formatLabelUrl = url => (
  //remove "{/name}" suggestion from end of link
  url.replace(/{.*}/g, '')
)