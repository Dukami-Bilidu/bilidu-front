import React from 'react'
import * as S from "./indexStyle"

const Sidebar = () => {
  return (
    <S.Bar>
      <S.NavFunc>
        <S.Logo src="images/logo.svg"/>
        <S.NavTxt>신청현황</S.NavTxt>
        <S.NavTxt>대여현황</S.NavTxt>
      </S.NavFunc>
    </S.Bar>
  )
}

export default Sidebar