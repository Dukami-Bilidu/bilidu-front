import React from 'react'
import * as S from './indexStyle'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Signup= () => {
  return (
    <S.Wrap>
        <S.SignBox>
            <S.LogoBox>
                <S.Logo>로고</S.Logo>
            </S.LogoBox>
            <S.Input placeholder='계정'></S.Input>
            <S.Input placeholder='비밀번호'></S.Input>
            <S.Input placeholder="이름" />
            <S.Input placeholder="학번" />
            <S.SignBtn>회원가입</S.SignBtn>
            <S.P>계정이 있다면? <Link to='/Login'>로그인</Link></S.P>
        </S.SignBox>
    </S.Wrap>
  )
}

export default Signup
