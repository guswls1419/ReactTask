import React from 'react'
import styled from 'styled-components';
import ContentsItem from './ContentsItem';

function Contents() {
  return (
    <ContentsWrap>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>
        <ContentsItem/>

    </ContentsWrap>
  )
}

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  position: absolute;
  width: 335px;
  height: 664px;
  left: 20px;
  top: 124px;
  overflow : scroll;
  overflow-x : hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }

`

export default Contents