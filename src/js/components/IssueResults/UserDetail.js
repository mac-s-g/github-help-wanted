import React from 'react'
import {
  Container,
  Grid,
  Image,
  Label
} from 'semantic-ui-react'

const UserDetail = ({
  grid_width,
  avatar_url,
  user_url,
  username
}) => (
  <Grid.Column {...grid_width} only='computer tablet' >
    <Container textAlign='center' >
      <Image
        circular
        as="a"
        target="_blank"
        href={user_url}
        src={avatar_url} />
      <Label
        style={{
          position: 'absolute',
          top: '100px',
          left: '0px',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          wordWrap: 'break-word'
        }}
        as='a'
        target="_blank"
        href={user_url} >
        @{username}
      </Label>
    </Container>
  </Grid.Column>
)

export default UserDetail