import React from 'react'
import { Container, Content } from './styles'

import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'
import { Link } from 'react-router-dom'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <Link to="/home" ><SidebarItem Icon={FaHome} Text="Home" /> </Link>
        <Link  to="/Statistics"><SidebarItem Icon={FaChartBar} Text="Statistics" /></Link>
        <Link  to="/Tratamento"><SidebarItem Icon={FaUserAlt} Text="Tratamento" /></Link>
        <Link  to="/MonitorOper"><SidebarItem Icon={FaEnvelope} Text="Monitor Oper" /></Link>
        <Link  to="/Escalas"><SidebarItem Icon={FaRegCalendarAlt} Text="Escalas" /></Link>
        <Link  to="/Proficionais"><SidebarItem Icon={FaIdCardAlt} Text="Proficionais" /></Link>
        <Link  to="/Financeiros"><SidebarItem Icon={FaRegFileAlt} Text="Financeiros" /></Link>
        <Link  to="/Pacientes"><SidebarItem Icon={FaRegSun} Text="Pacientes" /></Link>
      </Content>
    </Container>
  )
}

export default Sidebar