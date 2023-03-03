import { COLORS } from '@constants/colors'
import { onLargeWeb } from '@styles/responsive'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-width: 40rem;
  max-width: 60rem;
  padding-top: 5rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${onLargeWeb} {
    max-width: 100rem;
  }
`
export const Title = styled.h1`
  width: 100%;
  font-size: 3rem;
  text-align: center;
`

export const Form = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & + & {
    margin-top: 1.5rem;
  }
`
export const Label = styled.label`
  margin-bottom: 1rem;
  font-size: 1.8rem;
`
export const Input = styled.input`
  padding: 1rem;
  font-size: 1.6rem;
  border: 1px solid ${COLORS.SILVER};
  border-radius: 1rem;
`
export const SubmitButton = styled.input`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  padding: 1.5rem 1rem;
  margin-top: 4rem;
  border-radius: 1rem;
  background-color: ${COLORS.THEME_500};
  color: ${COLORS.CLOUD};
  font-size: 1.8rem;
  text-align: center;
`
export const ErrorText = styled.div`
  width: 100%;
  margin: 1rem 0;
  text-align: left;
  font-size: 1.4rem;
  color: red;
`
