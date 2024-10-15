import React from 'react'
import SideBar from '../../components/common/sidebar'
import Edit from '../../components/common/EditEquipment';
import * as S from "./indexStyle";

const Main = () => {
  return (
    <S.MainStructure>
      <SideBar/>
      <S.EditScreen>
        <S.ContentBox>
          <S.Header>
                <S.Title>수정하기</S.Title>
                <S.DelectButton>기자재 삭제</S.DelectButton>
            </S.Header>
          <S.Line></S.Line>
          <Edit />
        </S.ContentBox>
      </S.EditScreen>
      
      
    </S.MainStructure>
    
  )
}

export default Main;
