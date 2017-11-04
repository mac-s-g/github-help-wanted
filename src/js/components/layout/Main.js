import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import QueryFilters from './../../containers/QueryFilters'
import {
  Container,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>
    <Navbar />
    <Container>
      <QueryFilters />
    </Container>
    <Footer />
  </div>
)

export default FixedMenuLayout
