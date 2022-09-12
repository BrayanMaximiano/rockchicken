import React from 'react'
import { Container, FotoItem, FotoItemWrapper, InfoWrapper, ItemDesc, ItemName } from './styles'

const index = (props) => {
  return (
    <Container >
        <FotoItemWrapper>
            <FotoItem src='https://via.placeholder.com/150'/>
        </FotoItemWrapper>
        <InfoWrapper>
            <ItemName>{props.nome}</ItemName>
            <ItemDesc>{props.desc}</ItemDesc>
        </InfoWrapper>
    </Container>
  )
}

export default index