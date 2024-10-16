import React, { useState } from 'react'
import * as S from "./indexStyle"
const EquipmentContainer = () => {
  const [remaining, setRemaining] = useState(23);
const [max, setMax] = useState(100);
  return (
    <S.MainContainer>
      <S.InfoBox>
        <S.InfoDetail>
        <S.EquipmentName>가위</S.EquipmentName>
        <S.BorrowButton onClick={{}}>신청</S.BorrowButton>
        </S.InfoDetail>
      </S.InfoBox>
      <S.RemainingCount>{remaining}/{max}</S.RemainingCount>
    </S.MainContainer>
  )
}
export default EquipmentContainer