import React from 'react'
import * as S from "./indexStyle"
import logo from './images/logo.png';

const SideBar = () => {
  return (
    <S.Bar>
      <S.NavFunc>
      <S.Logo src={logo} />
      <S.NavTxt>신청현황</S.NavTxt>
      <S.NavTxt>대여현황</S.NavTxt>
      </S.NavFunc>
    </S.Bar>
  )
}

export default SideBar;