import React, { useState } from 'react'
import styled from 'styled-components';
import FilterModal from '../FilterModal';
import * as dateFns from "date-fns";
import { IoCellular } from "react-icons/io5";
import { IoIosWifi } from "react-icons/io";
import { BsBatteryFull } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";

function Header() {
    const nowTime = dateFns.format(new Date(), "hh:mm")
    const [modal,setModal] = useState(false);

    function closeModal() {
      if(modal === true) {
        setModal(false)
      }
    }

  return (
    <HeaderWrap>
        <TopBar>
            <Time>{nowTime}</Time>
            <IconWrap>
              <Signal>
                <IoCellular/>
              </Signal>
              <Wifi>
                <IoIosWifi/>
              </Wifi>
              <Battery>
                <BsBatteryFull/>
              </Battery>
            </IconWrap>
        </TopBar>
        <Area>
            <Headline onClick={()=>{setModal(true)}}><BsSearch/> 전체 헤드라인</Headline>
            <Days onClick={()=>{setModal(true)}}><BsCalendarCheck/> 전체 날짜</Days>
            <Country onClick={()=>{setModal(true)}}>전체 국가</Country>
        </Area>
    

      {
        modal === true 
        ? <FilterModal closeModal={closeModal}/>
        : null
      }
</HeaderWrap>
  )
}

const HeaderWrap = styled.div`
  width: 375px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`
const TopBar = styled.div`
  width: 375px;
  height: 44px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`
const Time = styled.div`
  position: absolute;
  width: 32px;
  height: 18px;
  left: 29.5px;
  top: 13px;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.165px;
  color: #000000;
`
const IconWrap = styled.div`
  display : flex;
  justify-content :center;
  align-items : center;
  padding-top : 8px;
  margin-left : 255px;
`
const Signal = styled.div`
  font-size : 19px;
  margin-right : 5px;
`
const Wifi = styled.div`
  font-size : 20px;
  margin-right : 5px;
`
const Battery = styled.div`
  font-size : 22px;
`

const Area = styled.div`
  width: 375px;
  height: 60px;
  background: #fff;
  display :flex;
  justify-content : left;
  align-items :center;
`
const Headline = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.08em;
  color: #6D6D6D;
  flex: none;
  order: 1;
  flex-grow: 0;

  /* box */
  box-sizing: border-box;
  padding: 4px 8px 4px 8px;
  margin-left: 18px; 
  margin-right: 5px; 
  gap: 4px;
  width: 125px;
  border: 1px solid #C4C4C4;
  border-radius: 30px;
  flex: none;
  order: 2;
  flex-grow: 0;
`
const Days = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.08em;
  color: #6D6D6D;
  flex: none;
  order: 1;
  flex-grow: 0;

  /* box */
  box-sizing: border-box;
  padding: 4px 12px 4px 12px;  
  margin-right: 5px;
  gap: 4px;
  width: 100px;
  border: 1px solid #C4C4C4;
  border-radius: 30px;
  flex: none;
  order: 2;
  flex-grow: 0;
`
const Country = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.08em;
  color: #6D6D6D;
  flex: none;
  order: 1;
  flex-grow: 0;

  /* box */
  box-sizing: border-box;
  padding: 4px 12px 4px 12px;
  gap: 4px;
  width: 82px;
  border: 1px solid #C4C4C4;
  border-radius: 30px;
  flex: none;
  order: 2;
  flex-grow: 0;
`

export default Header