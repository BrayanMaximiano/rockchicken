import React from 'react'
import { Container, Left, Center, Right, PaymentWrapper, Payment } from './styles'

const index = () => {
  return (
    <Container>
        <Left>
            
        </Left>
        <Center>
            <h1>RockChicken, since 2022.</h1>
        </Center>
        <Right>
            <PaymentWrapper>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </PaymentWrapper>
        </Right>
    </Container>
  )
}

export default index