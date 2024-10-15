import React from 'react'
import * as S from './style.js'

const Edit = () => {
  return (
    <S.Mainbox>
        <S.EditScreen>
            <S.EquipmentPhoto/>
            <S.InputPlace>
                <S.EquipmentInput placeholder='기자재 이름'/>
                <S.EquipmentInput placeholder='전체 개수'/>
                <S.EquipmentInput placeholder='보유 개수'/>
            </S.InputPlace>
        </S.EditScreen>
        <S.SubmitButton>기자재 수정</S.SubmitButton>
    </S.Mainbox>
  )
}

export default Edit;
