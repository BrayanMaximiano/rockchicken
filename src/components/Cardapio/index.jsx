import React from 'react'
import { Container, Title } from './styles'
import ComboSection from '../ComboSection'
import BaldeSection from '../BaldeSection'
import MolhoSection from '../MolhoSection'
import BebidaSection from '../BebidaSection'

const index = () => {
  return (
    <Container>
        <Title> Cardápio</Title>
        <ComboSection section="Combos" />
        <BaldeSection section="Bebidas" />
        <MolhoSection section="Molhos" />
        <BebidaSection section="Molhos" />
    </Container>
  )
}

export default index