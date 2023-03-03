import GNB from '@components/GNB'
import { onLargeWeb } from '@styles/responsive'
import styled from 'styled-components'

interface Props {
  children?: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <GNB />
      {children}
    </Container>
  )
}

export default Layout

const Container = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);

  ${onLargeWeb} {
    height: auto;
  }
`
