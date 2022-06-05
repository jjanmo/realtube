import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props {
  href: string
  text: string
  bg?: string
  color?: string
  _hover?: {
    bg?: string
    color?: string
  }
}

function StyledLink({
  href,
  text,
  color = 'Black',
  bg = 'transparent',
  _hover = { bg: 'transparent', color: 'Black' },
}: Props) {
  return (
    <NextLink href={href} passHref>
      <Link
        display="flex"
        height="100%"
        justifyContent="center"
        alignItems="center"
        textTransform="uppercase"
        fontSize={20}
        fontWeight={700}
        color={color}
        bg={bg}
        _hover={_hover}
      >
        {text}
      </Link>
    </NextLink>
  )
}

export default StyledLink
