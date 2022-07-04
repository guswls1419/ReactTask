import React from 'react'
import styled from 'styled-components';

function FilterModal(props) {
    const {closeModal} = props;

    const CountryList = [
        "대한민국",
        "중국",
        "일본",
        "미국",
        "북한",
        "러시아",
        "프랑스",
        "영국"
    ]

  return (
    <ModalWrap>
        <ModalBack/>
        <ModalCon>
            <HeadlineWrap>
                <HeadlineText>헤드라인</HeadlineText>
                <HeadlineInput type='text' placeholder='검색하실 헤드라인을 입력해주세요.'></HeadlineInput>
            </HeadlineWrap>
            <DaysWrap>
                <DaysText>날짜</DaysText>
                <DaysInput type="date" placeholder='날짜를 선택해주세요.'></DaysInput>
            </DaysWrap>
            <CountryWrap>
                <CountryText>국가</CountryText>
                <CountryNameList>
                    {
                        CountryList.map((a) => {
                            return(
                                <label key={a}>
                                    <CountryInput 
                                        type="checkbox" 
                                        name="국가" 
                                        value="대한민국" 
                                        />{a}
                                </label>
                            )
                        })
                    } 
                </CountryNameList>    

               
            </CountryWrap>
            <FilterBtn onClick={closeModal}>필터 적용하기</FilterBtn>
        </ModalCon>
    </ModalWrap>
  )
}

const ModalWrap = styled.div`

  z-index : 1;
`
const ModalBack = styled.div`
  position: absolute;
  width: 375px;
  height: 812px;
  left: 0px;
  top: 0px;
  background: #000000;
  opacity: 0.5;
  z-index : 1;
`
const ModalCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 40px;
  position: absolute;
  width: 295px;
  height: 440px;
  left: 20px;
  top: 166px;
  background: #FFFFFF;
  border-radius: 16px;
  z-index : 2;
`
const HeadlineWrap = styled.div`
  display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 295px;
height: 76px;
flex: none;
order: 0;
flex-grow: 0;
`
const HeadlineText = styled.div`
font-family: 'Apple SD Gothic Neo';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.05em;
color: #000000;
`
const HeadlineInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;
gap: 181px;
width: 295px;
height: 44px;
border: 1px solid #C4C4C4;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;

font-family: 'Apple SD Gothic Neo';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: -0.04em;
color: #C4C4C4;
`
const DaysWrap = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;
width: 295px;
height: 76px;
flex: none;
order: 1;
flex-grow: 0;
`
const DaysText = styled.div`
font-family: 'Apple SD Gothic Neo';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.05em;
color: #000000;
`
const DaysInput = styled.input`
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;
gap: 181px;
width: 295px;
height: 44px;
border: 1px solid #C4C4C4;
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;

font-family: 'Apple SD Gothic Neo';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: -0.04em;
color: #C4C4C4;
`
const CountryWrap = styled.div`
padding: 0px;
gap: 8px;
width: 295px;
height: 108px;
flex: none;
order: 2;
flex-grow: 0;
`
const CountryText = styled.div`
font-family: 'Apple SD Gothic Neo';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.05em;
color: #000000;
`

const CountryNameList = styled.div`

`
const CountryInput = styled.input`

`
const FilterBtn = styled.button`
flex: none;
order: 3;
flex-grow: 0;

width: 295px;
height: 60px;
background: #3478F6;
border-radius: 16px;
border : none;

font-family: 'Apple SD Gothic Neo';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
/* identical to box height, or 150% */

text-align: center;
letter-spacing: -0.05em;

/* White 100 */

color: #FFFFFF;
`
export default FilterModal