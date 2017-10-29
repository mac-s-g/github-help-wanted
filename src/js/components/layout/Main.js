import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import IndexContent from './IndexContent'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
  <div>

    <Navbar />

    <IndexContent />

    <Footer />

  </div>
)

export default FixedMenuLayout
