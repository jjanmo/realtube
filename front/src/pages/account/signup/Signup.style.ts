import { COLORS } from '@constants/colors'
import styled from 'styled-components'
import { Row } from '../common.style'

export const SocialContainer = styled.div`
  width: 60%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 2rem;
  }
`
export const InnerWrapper = styled.div`
  display: flex;
  margin: 1rem 0;
  div {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    color: white;
    font-size: 1.4rem;
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .kakao {
    background-color: #f9e000;
  }
  .naver {
    background-color: #2db400;
  }
  .google {
    background-color: #2684fc;
  }
`

export const CheckedRow = styled(Row)<{ error: boolean }>`
  margin-bottom: 1rem;
  flex-direction: row;
  align-items: center;
  color: ${({ error }) => (error ? 'red' : 'inherit')};

  input {
    width: 1.5rem;
    height: 1.5rem;
  }

  label {
    font-size: 1.4rem;
    margin: 0;
  }
`
