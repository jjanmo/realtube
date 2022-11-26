import StyledLink from '@components/StyledLink'
import * as S from './GNB.style'
import { links } from '@constants/links'

const GNB = () => {
  return (
    <S.Container>
      <S.Content>
        {links.map(({ text, href }) => (
          <StyledLink key={href} href={href} text={text} />
        ))}
      </S.Content>
    </S.Container>
  )
}

export default GNB
