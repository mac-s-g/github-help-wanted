import React from 'react'

import {
  Container,
  Icon,
  Item
} from 'semantic-ui-react'

import { constants } from './../../constants'

const { links } = constants

const RateLimitExceeded = () => (
  <Container>
    <Item.Content>
      <span>GitHub's API </span>
      <a
        target='_blank'
        href="https://developer.github.com/v3/#rate-limiting">
        rate limit
      </a>
      <span> was exceeded for your IP.</span>
    </Item.Content>
    <Item.Content>
      You can try again in a few minutes.
    </Item.Content>
    <Item.Content style={{marginTop:'15px'}}>
      <b>- or -</b>
    </Item.Content>
    <Item.Content style={{marginTop:'15px'}}>
      Can you help me improve the API integration?
    </Item.Content>
    <Item.Content>
      <span>This project connects to GitHub's </span>
      <a
        target='_blank'
        href='https://developer.github.com/v3/search/#search-issues' >
        public search API
      </a>
      <span>. </span>
    </Item.Content>
    <Item.Content style={{marginTop:'15px'}}>
      <span>Help promote improvements by submitting a PR</span>
    </Item.Content>
    <Item.Content>
      <span>or simply posting a </span>
      <a
        target='_blank'
        href={links.internal.gh_repo_url} >
        <Icon name='star' />on <Icon name='github' />
      </a>
      <span>. </span>
    </Item.Content>
  </Container>
)

const GenericFetchError = () => (
  <Container>
    <Item.Content>
      An error occurred while fetching issues from GitHub.
    </Item.Content>
    <Item.Content
      as='a'
      target='_blank'
      href={
        links.internal.gh_issues_url
        + "new?title=API%20Fetch%20Error:&body=describe%20how%20to%20replicate%20the"
        + "%20issue:%0A%0Athank%20you%20for%20contributing!"
      }
      content='Help improve this project by reporting the issue.'
      />
  </Container>
)

export default ({hidden, rate_limit_exceeded}) => {
  return (
    hidden
    ? null
    : (
      <Container
        textAlign='center'>
        <Icon
          style={{marginBottom: '10px'}}
          name='exclamation triangle'
          color='red'
          size='big' />
        {
          rate_limit_exceeded
            ? <RateLimitExceeded />
            : <GenericFetchError />
        }
      </Container>
    )
  )
}