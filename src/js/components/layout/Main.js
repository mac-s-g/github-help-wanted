import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {
  Container,
  Grid,
  Header
} from 'semantic-ui-react'

import QueryFilters from './../../containers/QueryFilters'
import QueryResults from './../../containers/QueryResults'
import { constants } from './../../constants'

const { project_info } = constants;

const FixedMenuLayout = () => (
  <div>
    <Navbar />
    <Grid
      style={{ paddingTop: '7em' }} >
      <Grid.Column
        hidden >
        {/* placeholder for adding github user to main layout */}
        <Container>
        </Container>
      </Grid.Column>
      <Grid.Column
        width={16} >
        <Container
          style={{ marginBottom: '4em' }} >
          <Header
            style={{marginBottom: '2em'}}
            size='large' >
            <Header.Content>
              GitHub Help Wanted
            </Header.Content>
            <Header.Subheader>
              {project_info.statement}
            </Header.Subheader>
          </Header>
          <QueryFilters />
          <QueryResults />
        </Container>
      </Grid.Column>
    </Grid>
    <Footer />
  </div>
)

export default FixedMenuLayout
