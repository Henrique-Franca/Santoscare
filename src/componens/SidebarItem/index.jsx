import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom';

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
     
      {Text}
    </Container>
  )
}

export default SidebarItem