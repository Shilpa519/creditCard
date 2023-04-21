import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CardTitle,
  HorizontalLine,
  CardDetailsContainer,
  CardNumber,
  CardNameContainer,
  NameHeading,
  Name,
  PaymentMethodContainer,
  PaymentTitle,
  PaymentName,
  PaymentNumber,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const onNameChange = event => {
    setName(event.target.value)
  }

  const onNumberChange = event => {
    setNumber(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <>
          <CardTitle>CREDIT CARD</CardTitle>
          <HorizontalLine />
        </>
        <CardDetailsContainer data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <CardNameContainer>
            <NameHeading>CARDHOLDER NAME</NameHeading>
            <Name>{name.toUpperCase()}</Name>
          </CardNameContainer>
        </CardDetailsContainer>
      </CardContainer>
      <PaymentMethodContainer>
        <PaymentTitle>Payment Method</PaymentTitle>
        <PaymentNumber
          type="text"
          placeholder="Card Number"
          value={number}
          onChange={onNumberChange}
        />
        <PaymentName
          type="text"
          value={name}
          placeholder="Cardholder Name"
          onChange={onNameChange}
        />
      </PaymentMethodContainer>
    </MainContainer>
  )
}

export default CreditCard
