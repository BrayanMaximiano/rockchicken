import React from 'react'
import { Container, Logo, LogoWrapper } from './styles'
import RockChickenLogo from '../../assets/Logo.png'

const index = () => {
  return (
    <Container>
        <LogoWrapper>
            <Logo src={RockChickenLogo}/>
        </LogoWrapper>
    </Container>
  )
}

export default index