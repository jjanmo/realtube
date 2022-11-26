import NextLink from 'next/link'
import styled from 'styled-components'

interface Props {
  href: string
  text: string
}

function StyledLink({ href, text }: Props) {
  return (
    <NextLink href={href} passHref>
      <Content>{text}</Content>
    </NextLink>
  )
}

export default StyledLink

const Content = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
