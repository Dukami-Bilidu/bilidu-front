import React from 'react'
import * as S from './indexStyle';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {


{
  }
  return (
    <S.Wrap>
        <S.LoginBox>
            <S.LogoBox>
              <S.Logo>로고</S.Logo>
            </S.LogoBox>
            <S.Input placeholder="Id" />
            <S.Input placeholder="pw" />
            <S.LoginBtn>로그인</S.LoginBtn>
            <S.P> 계정이 없다면? <Link to='/Signup' >회원가입</Link></S.P>
        </S.LoginBox>
    </S.Wrap>
  )
}

export default Login
