import React from 'react'
import { Container, Title } from './styles'
import CardapioItem from '../CardapioItem'

const index = (props) => {
  return (
    <Container data-aos="fade-left">
        <Title> {props.section} </Title>
        <CardapioItem nome="combo 1" desc="6 tiras de peitop de frango, empanadas na hora e fritas, servidas bem crocantes.
        acompanha molho honey mustard levemente apimentado e uma bebida da sua escolha"/>
        <CardapioItem nome="combo 1" desc="6 tiras de peitop de frango, empanadas na hora e fritas, servidas bem crocantes.
        acompanha molho honey mustard levemente apimentado e uma bebida da sua escolha"/>
        <CardapioItem nome="combo 1" desc="6 tiras de peitop de frango, empanadas na hora e fritas, servidas bem crocantes.
        acompanha molho honey mustard levemente apimentado e uma bebida da sua escolha"/>
        
    </Container>
  )
}

export default index