import styled from "styled-components";

//전체
export const All = styled.div`
  height:0px;
`;

//기자자 신청에 대한 박스
export const Box = styled.div`
  width: 890px;
  height: 140px;
  position: relative;
  left: 350px;
  top: 500px;
  border-radius: 24px;
  border: 2px solid #d2d2d2;
`;
// 기자제 이름
export const Ep = styled.div`
  display: inline-flex;
  margin-top: 38px;
  margin-left: 80px;
`;
//빌릴 기자재 개수
export const Count = styled.div`
  display: inline-flex;
  margin-left: 80px;
`;
//기자재 빌릴 사유
export const Reason = styled.div`
  flex-wrap: nowrap;
  padding-left: 58px;
  margin: 20px;
`;
//신청 현황을 알려주는 텍스트
export const Access = styled.div`
  display: inline-flex;
  position: relative;
  right:50px;
  top:-65px;
  font-weight: 455;  
  font-size:22px;
  margin-left: 750px;

`;
//기자제 수락여부
export const button = styled.button`
  position:relative;
  left: 690px;
  bottom: 70px;
  background-color: ;
  border: none;
  width: 100px;
  height: 40px;
  font-size:20px;
`;
