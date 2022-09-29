import React from 'react'
import { Container, FotoWrapper, Img, ItemName } from './styles'

const index = (props) => {
  return (
    <Container>
      <FotoWrapper>
        <Img src={props.img}/>
      </FotoWrapper>
      <ItemName>• {props.name}</ItemName>

    </Container>
  )
}

export default index