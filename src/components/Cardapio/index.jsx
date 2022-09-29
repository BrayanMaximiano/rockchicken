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
        <BaldeSection section="Baldes" />
        <MolhoSection section="Molhos" />
        <BebidaSection section="Bebidas" />
    </Container>
  )
}

export default index