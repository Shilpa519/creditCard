import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  max-height: 100%;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  width: 45%;
  justify-content: space-between;
`

export const CardTitle = styled.h1`
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 28px;
  text-align: center;
`
export const HorizontalLine = styled.hr`
  align-items: center;
  width: 250px;
  border: 1px solid #ffd773;
`

export const CardDetailsContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  margin: 25px;
  background-size: cover;
  border-radius: 6px;
  height: 60vh;
  width: 60vh;
  margin: 5px;
  display: flex;
  flex-direction: column;
`

export const CardNumber = styled.p`
  margin-top: 90px;
  margin-left: 25px;
  font-size: 25px;
  font-weight: 600;
  color: #d3d9e0;
`

export const CardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-left: 25px;
`

export const NameHeading = styled.p`
  font-size: 20px;
  color: #d3d9e0;
`

export const Name = styled.p`
  font-size: 20px;
  color: #d3d9e0;
`
export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  background-color: #ffffff;
`

export const PaymentTitle = styled.h1`
  font-weight: 700;
  font-size: 18px;
  color: #475569;
`

export const PaymentNumber = styled.input`
  width: 250px;
  margin-bottom: 15px;
  padding: 15px;
`

export const PaymentName = styled.input`
  width: 250px;
  margin-bottom: 10px;
  padding: 15px;
`
