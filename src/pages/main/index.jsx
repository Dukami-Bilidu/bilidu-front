import React from "react";
import * as S from "./indexStyle";
import EquipmentContainer from '../../components/common/equipmentContainer';
import SideBar from "../../components/common/sideBar";
const Main = () => {
  return (
    <S.Container>
      <SideBar/>
      <S.MainContainer>
        <S.TopNav>
          <S.SchoolName>DGSW</S.SchoolName>
          <S.SubmitItem>기타 물건신청</S.SubmitItem>
        </S.TopNav>
          <hr style={{width:"862px", border:"1px solid #D9D9D9"}}/>
        <S.EquipmentDiv>
          <EquipmentContainer/>
          <EquipmentContainer/>
          <EquipmentContainer/>
          <EquipmentContainer/>
          <EquipmentContainer/>
          <EquipmentContainer/>
        </S.EquipmentDiv>
        </S.MainContainer>
    </S.Container>
  )
}
export default Main