import React from 'react'
import { Button, Container, HomePng, HomePngWrapper, Title } from './styles';
import HomeChicken from '../../assets/HomeChikenImg.png'



const index = () => {

    

  return (
    <Container >
        <HomePngWrapper>
          <HomePng src={HomeChicken}/>
        </HomePngWrapper>
        <Title> Bateu a fome? pede um <strong> Rock Chicken </strong></Title>
      <Button onClick={()=> {window.location.href= "https://www.ifood.com.br/inicio"}}>Peça Agora!</Button>
    </Container>
  )
}

export default index;