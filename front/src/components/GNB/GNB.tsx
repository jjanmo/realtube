import * as S from './GNB.style'
import Link from 'next/link'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '@constants/colors'
import { links } from '@constants/links'

const GNB = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <Link href="/">
          <FontAwesomeIcon icon={faSeedling} color={COLORS.THEME_400} />
          <div className="logo-text">RealTube</div>
        </Link>
      </S.LogoWrapper>

      <S.ButtonContainer>
        <Link href="/account/signin">
          <Button className="signin">로그인</Button>
        </Link>
        <Link href="/account/signup">
          <Button className="signup" type="primary">
            회원가입
          </Button>
        </Link>
      </S.ButtonContainer>

      <S.Navigation>
        {links.map(({ text, href }) => (
          <Link key={text} href={href}>
            <Button type="text">{text}</Button>
          </Link>
        ))}
      </S.Navigation>
    </S.Container>
  )
}

export default GNB
