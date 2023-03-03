import Layout from '@components/Layout'
import { useForm } from 'react-hook-form'
import * as S from './Signup.style'
import * as CS from '../common.style'

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  console.log(errors)

  const onSubmit = () => {
    console.log('submited')
  }

  return (
    <Layout>
      <CS.Container>
        <CS.Title>회원 가입</CS.Title>

        <S.SocialContainer>
          <h2>SNS 계정으로 가입</h2>
          <S.InnerWrapper>
            <div className="kakao">카톡</div>
            <div className="naver">네이버</div>
            <div className="google">구글</div>
          </S.InnerWrapper>
        </S.SocialContainer>

        <CS.Form onSubmit={handleSubmit(onSubmit)}>
          <CS.Row>
            <CS.Label htmlFor="email">이메일</CS.Label>
            <CS.Input
              id="email"
              type="email"
              placeholder="이메일을 입력하세요"
              {...register('email', { required: '이메일을 입력하세요' })}
            />
          </CS.Row>
          {errors['email'] && <CS.ErrorText>{errors['email'].message as string}</CS.ErrorText>}

          <CS.Row>
            <CS.Label htmlFor="password1">비밀번호</CS.Label>
            <CS.Input
              id="password1"
              placeholder="비밀번호를 입력하세요"
              {...register('password1', {
                required: '8자 이상, 영문/숫자/특수문자를 2가지 이상 조합해주세요.',
              })}
            />
          </CS.Row>
          {errors['password1'] && (
            <CS.ErrorText>{errors['password1'].message as string}</CS.ErrorText>
          )}

          <CS.Row>
            <CS.Label htmlFor="password2">비밀번호 확인</CS.Label>
            <CS.Input
              id="password2"
              placeholder="비밀번호를 입력하세요"
              {...register('password2', { required: '비밀번호가 일치하지 않습니다.' })}
            />
          </CS.Row>
          {errors['password2'] && (
            <CS.ErrorText>{errors['password2'].message as string}</CS.ErrorText>
          )}

          <S.CheckedRow error={!!errors['agree']}>
            <CS.Input type="checkbox" id="agree" {...register('agree', { required: true })} />
            <CS.Label htmlFor="agree">영어공부를 열심히 하겠습니다 🙏</CS.Label>
          </S.CheckedRow>

          <CS.SubmitButton type="submit" value="회원가입" />
        </CS.Form>
      </CS.Container>
    </Layout>
  )
}

export default Signup
