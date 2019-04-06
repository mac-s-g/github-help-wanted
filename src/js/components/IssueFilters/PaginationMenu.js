import React from 'react'
import Styled from 'styled-components'
import { Menu } from 'semantic-ui-react'

import { formatNumberForDisplay } from './../../helpers/'


const PaginationMenu = ({
  selectedPage,
  selectedPerPage,
  totalResults,
  onChange
}) => {
  const result_limit = 1000
  const total_pages = Math.ceil(totalResults / selectedPerPage)
  let page_limit = Math.floor(result_limit / selectedPerPage)
  if (page_limit > total_pages) {
    page_limit = total_pages
  }

  return (
    <Container hidden={total_pages <= 1} >
      <Menu
        style={{cursor:'pointer'}}
        pagination >
        <Menu.Item
          name='first'
          onClick={() => {onChange(1)}}
          style={{display: selectedPage <= 2 ? 'none' : 'block'}} />
        <Menu.Item
          name={(selectedPage - 1).toString()}
          onClick={() => {onChange(selectedPage - 1)}}
          style={{display: selectedPage == 1 ? 'none' : 'block'}} />
        <Menu.Item
          active
          name={selectedPage.toString()} />
        <Menu.Item
          name={(selectedPage + 1).toString()}
          onClick={() => {onChange(selectedPage + 1)}}
          style={{display: selectedPage == page_limit ? 'none' : 'block'}} />
        <Menu.Item
          name={(selectedPage + 2).toString()}
          onClick={() => {onChange(selectedPage + 2)}}
          style={{display: (selectedPage + 1) >= page_limit ? 'none' : 'block'}} />
      </Menu>
    </Container>
  )
}

const Container = Styled.div`
  text-align: right;
  margin-top: 30px;
  display: ${props => props.hidden ? 'none' : 'block'}
`

export default PaginationMenu