import React from 'react'
import Logo from './../Logo'
import {
    Container,
    Menu,
    Icon,
    Dropdown
} from 'semantic-ui-react'


const Navbar = () => (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Logo />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            fixed='right'
            as='a'
            href="https://github.com/mac-s-g/github-help-wanted"
            target="_blank" >
            <Icon
              name="github"
              size="large"
            />
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
)

export default Navbar