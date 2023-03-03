import { onLargeWeb } from '@styles/responsive'
import { COLORS } from '@constants/colors'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${onLargeWeb} {
    height: 7rem;
  }
`

export const LogoWrapper = styled.div`
  width: 50%;
  height: 5rem;
  padding: 0 1rem;
  flex: 1;
  display: flex;

  align-items: center;

  .logo-text {
    margin-left: 0.8rem;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${COLORS.GRAY};
  }

  svg {
    font-size: 2rem;
  }

  ${onLargeWeb} {
    width: 25%;
    height: 100%;
    padding: 0 3rem;
    justify-content: center;
    order: 1;

    svg {
      font-size: 3rem;
    }

    .logo-text {
      margin-left: 1.2rem;
      font-size: 2.5rem;
    }
  }
`

export const ButtonContainer = styled.div`
  width: 50%;
  height: 5rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    width: 8rem;
  }

  .signin {
    border: 1px solid ${COLORS.THEME_600};
    color: ${COLORS.THEME_600};
  }
  .signup {
    margin-left: 1rem;
    background-color: ${COLORS.THEME_500};
  }

  ${onLargeWeb} {
    width: 25%;
    height: 100%;
    padding: 0 3rem;
    order: 3;
  }
`

export const Navigation = styled.ul`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  font-size: 1.8rem;

  ${onLargeWeb} {
    width: 50%;
    height: 100%;
    order: 2;
  }
`
