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
      style={{ paddingTop: '4em' }} >
      {/* placeholder for adding github user to main layout
      <Grid.Column >
        <Container>
        </Container>
      </Grid.Column>
      */}
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
              <p>
                The open-source software community is strongest when we collaborate.
              </p>
              <p>
                Use the filters below to find projects you'd like to contribute to.
              </p>
            </Header.Subheader>
          </Header>
          <QueryFilters>
            <QueryResults />
          </QueryFilters>
        </Container>
      </Grid.Column>
    </Grid>
    <Footer />
  </div>
)

export default FixedMenuLayout
