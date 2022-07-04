import React, { useState } from 'react'
import styled from 'styled-components';
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

function ContentsItem() {
  
  const [star, setStar] = useState(true);
  return (
    <ContentsItems>
            <TopCon>
                <Title>국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”</Title>
                {
                  star === true
                  ? <Star onClick={()=>{setStar(false)}}><BsStar/></Star>
                  : <StarFull onClick={()=>{setStar(true)}}><BsStarFill/></StarFull>
                }
                
            </TopCon>
            <BottomCon>
                <NewspaperWrap>
                    <Newspaper>조선일보</Newspaper>
                    <Names>김정확 기자</Names>
                </NewspaperWrap>
                <Days>2021.3.15 (목)</Days>
            </BottomCon>
    </ContentsItems>
  )
}
const ContentsItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  gap: 8px;
  width: 305px;
  height: 94px;
  background: #FEFEFE;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`
const TopCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 295px;
  height: 56px;
  flex: none;
  order: 0;
  flex-grow: 0;
`
const Title = styled.div`
  width: 260px;
  height: 56px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`
const Star = styled.div`
  color: #6D6D6D;
  font-size: 18px;
  margin-top: 7px;
`
const StarFull = styled.div`
  color: #FFB800;
  font-size: 18px;
  margin-top: 7px;
`
const BottomCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  gap: 8px;
  width: 295px;
  height: 20px;
  flex: none;
  order: 1;
  flex-grow: 0;
`
const NewspaperWrap = styled.div`
 display :flex;
`
const Newspaper = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #000000;  
  flex: none;
  flex-grow: 0;
  margin-right : 10px;
`
const Names = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.05em;  
  color: #000000;
  flex: none;
  flex-grow: 0;
`
const Days = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #6D6D6D;
  flex: none;
  flex-grow: 0;
`
export default ContentsItem