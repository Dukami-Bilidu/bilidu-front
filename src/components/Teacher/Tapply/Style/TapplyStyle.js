import styled from "styled-components";

//전체
export const All = styled.div`
  height:0px;
`;

//신청현황()
export const Title = styled.h2`
    font-weight: 455;  
    font-size:30px;
    display:inline-flex;
    position: relative;
    left: 354px;
    top:50px;
    margin-bottom: 5px; /* 밑줄과의 간격 */

`;
//구분선
export const Line = styled.hr`
    background: #d2d2d2;
    position: relative;
    top: 50px;
    margin-left: 355px;
    margin-right: 230px;
    margin-bottom: 20px;
    
`;
//기자자 신청에 대한 박스
export const Box = styled.div`
  width: 890px;
  height: 160px;
  position: relative;
  left: 350px;
  top: 64px;
  border-radius: 24px;
  border: 2px solid #d2d2d2;
`;
// 기자제 이름
export const Ep = styled.div`
  display: inline-flex;
  margin-top: 48px;
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
//기자제 수락여부
export const Button = styled.button`
  position:relative;
  left: 590px;
  bottom: 70px;
  background-color: ;
  border: none;
  width: 100px;
  height: 40px;
  font-size:20px;
`
//기자제 수락여부
export const button = styled.button`
  position:relative;
  left: 630px;
  bottom: 70px;
  background-color: ;
  border: none;
  width: 100px;
  height: 40px;
  font-size:20px;
`;
