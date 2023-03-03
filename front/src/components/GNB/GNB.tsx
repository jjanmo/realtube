import * as S from './GNB.style'
import Link from 'next/link'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { COLORS } from '@constants/colors'
import { links } from '@constants/links'

const GNB = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <FontAwesomeIcon icon={faSeedling} color={COLORS.THEME_400} />
        <div className="logo-text">RealTube</div>
      </S.LogoWrapper>

      <S.ButtonContainer>
        <Button className="signin">
          <Link href="/account/signin">로그인</Link>
        </Button>
        <Button className="signup" type="primary">
          <Link href="/account/signup">가입하기</Link>
        </Button>
      </S.ButtonContainer>

      <S.Navigation>
        {links.map(({ text, href }) => (
          <Button key={text} type="text">
            <Link href={href}>{text}</Link>
          </Button>
        ))}
      </S.Navigation>
    </S.Container>
  )
}

export default GNB
