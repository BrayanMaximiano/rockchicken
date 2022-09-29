import React from 'react'
import { Button, Container, HomePng, HomePngWrapper, Title } from './styles';
import HomeChicken from '../../assets/HomeChikenImg.png'
import './animation.css'




const index = () => {

    

  return (
    <Container >
        <HomePngWrapper data-aos="zoom-in">
          <HomePng src={HomeChicken}/>
        </HomePngWrapper>
        <Title data-aos="zoom-in"> Bateu a fome? Pede um Rock Chicken</Title>
      <Button onClick={()=> {window.location.href= "https://www.ifood.com.br/inicio"}} className="btn" data-aos="zoom-in">Peça Agora!</Button>
    </Container>
  )
}

export default index;