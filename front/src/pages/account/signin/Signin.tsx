import Layout from '@components/Layout'
import { useForm } from 'react-hook-form'
import * as CS from '../common.style'
import * as S from './Signin.style'

function Signin() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({})

  const onSubmit = () => {
    console.log('clicked')
  }

  return (
    <Layout>
      <CS.Container>
        <S.Title>로그인</S.Title>
        <CS.Form onSubmit={handleSubmit(onSubmit)}>
          <CS.Row>
            <CS.Label htmlFor="email">이메일</CS.Label>
            <CS.Input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              {...register('email', { required: '이메일을 입력하세요' })}
            />
          </CS.Row>
          {errors['email'] && <CS.ErrorText>{errors['email'].message as string}</CS.ErrorText>}

          <CS.Row>
            <CS.Label htmlFor="password">비밀번호</CS.Label>
            <CS.Input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              {...register('password', { required: '비밀번호를 입력하세요' })}
            />
          </CS.Row>
          {errors['password'] && (
            <CS.ErrorText>{errors['password'].message as string}</CS.ErrorText>
          )}

          <CS.SubmitButton type="submit" value="로그인" />
        </CS.Form>

        <S.SocialContainer>
          <div className="kakao">카카오로 계속하기</div>
          <div className="naver">네이버로 계속하기</div>
          <div className="google">구글로 계속하기</div>
        </S.SocialContainer>
      </CS.Container>
    </Layout>
  )
}

export default Signin
