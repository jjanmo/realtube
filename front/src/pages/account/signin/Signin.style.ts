import styled from 'styled-components'
import * as CS from '../common.style'

export const Title = styled(CS.Title)`
  margin-bottom: 6rem;
`
export const SocialContainer = styled.div`
  width: 60%;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  div {
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    border-radius: 1rem;
    text-align: center;
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
