import React from 'react'
import Styled from 'styled-components'
import Markdown from 'react-markdown'
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  List
} from 'semantic-ui-react'

import Badge from './../../components/Badge'
import {
  formatRepositoryName,
  formatRepositoryUrl,
  formatDateForDisplay
} from './../../helpers'


const IssueDetail = ({
  grid_width,
  issue
}) => (
  <Grid.Column {...grid_width} >
    <List.Content>
      <Header>
        <Image
          rounded
          size="mini"
          as="a"
          href={issue.user.html_url}
          target="_blank"
          src={issue.user.avatar_url}  />
        <List.Content
          size="medium"
          as='a'
          target="_blank"
          href={issue.html_url} >
          {issue.title}
        </List.Content>
      </Header>
      <CommentIcon hidden={issue.comments == 0} >
        <Label
          as='a'
          target="_blank"
          href={issue.html_url} >
          <Icon name={'comment' + (issue.comments > 1 ? 's' : '') + ' outline'} />
          {issue.comments}
        </Label>
      </CommentIcon>
      <Header.Subheader
        as='a'
        style={{display: 'inline-block', margin: '5px 0'}}
        href={formatRepositoryUrl(issue.repository_url)}
        target="_blank">
        {formatRepositoryName(issue.repository_url)}
      </Header.Subheader>
      <List.Description>
        {formatDateForDisplay(issue.created_at)}
      </List.Description>
      <Divider />
      <List.Description>
        <ListDescription>
          <Markdown source={
            issue.body.trim() == ''
            ? 'No Description'
            : issue.body
          } />
        </ListDescription>
      </List.Description>
      <List.Content
        style={{
          marginLeft:'-5px',
          marginTop: '10px'
        }}>
        {issue.labels.map((label) => (
          <Badge
            key={label.id}
            label={label.name}
            color={label.color}
            className={'issues-badges'} />
        ))}
      </List.Content>
      {/*
        <pre>{JSON.stringify(item, null, 2)}</pre>
      */}
    </List.Content>
  </Grid.Column>
)

const CommentIcon = Styled.div`
  cursor: pointer;
  position: absolute;
  right 15px;
  top: 15px;
`

const ListDescription = Styled.div`
  margin-top:6px;
  overflow: auto;
  max-height: 100px;
`


export default IssueDetail