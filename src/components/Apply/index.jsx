import React from 'react'
import Sidebar from '../Sidebar'
import * as S from './indexStyle'

const Apply = () => {

  return (
    <S.MainWrap>
      <Sidebar />
      <S.Wrap>

        <S.ApplyText>신청하기</S.ApplyText>
        <S.Line/>

        <S.Main>
         <S.InputBox>

            <S.InputBox1>
              <S.SmallBox placeholder='기자재 이름(수정 불가능)'/>
              <S.SmallBox placeholder='개수' />
            </S.InputBox1>

            <S.InputBox1>
              <S.SmallBox placeholder='신청일자' />
              <S.SmallBox placeholder='반납일자' />
            </S.InputBox1>
          </S.InputBox>

          <S.BigBox placeholder='신청사유'></S.BigBox>
          <S.ApplyButton>신청하기</S.ApplyButton>
        </S.Main>

      </S.Wrap>
      
    </S.MainWrap>
  )
}

export default Apply
