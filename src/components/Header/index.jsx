import React from 'react'
import { Container, Logo, LogoWrapper } from './styles'
import RockChickenLogo from '../../assets/Logo.png'
import './styles.css'

const index = () => {
  return (
    <Container>
        <LogoWrapper>
            <Logo src={RockChickenLogo} className="logo"/>
        </LogoWrapper>
    </Container>
  )
}

export default index