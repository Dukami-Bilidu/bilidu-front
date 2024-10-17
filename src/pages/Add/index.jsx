import React from 'react'
import SideBar from '../../components/common/sidebar';
import Add from '../../components/common/AddEquipment';
import * as S from "./indexStyle";

const AddPage = () => {
  return (

    <S.MainStructure>
      <SideBar/>
      <S.EditScreen>
        <S.ContentBox>
          <S.Header>
                <S.Title>추가하기</S.Title>
            </S.Header>
          <S.Line></S.Line>
          
          <Add />
        </S.ContentBox>
      </S.EditScreen>
      
      
    </S.MainStructure>
    
  )
}

export default AddPage;