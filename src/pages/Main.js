import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../components/home/Header';
import Contents from '../components/home/Contents';
import ScrapContents from '../components/scrap/ScrapContents';
import { MdHomeFilled } from "react-icons/md";
import { BsFileText } from "react-icons/bs";

function Main() {
  const [Gnb, setGnb] = useState(true);
  const [HomeColor, setHomeColor] = useState(true);
  const [ScrapColor, setScrapColor] = useState(true);

  function homeFun() {
    setGnb(true)
    setHomeColor(true)
    setScrapColor(true)
  }

  function scrapFun() {
    setGnb(false)
    setHomeColor(false)
    setScrapColor(false)
  }

  return (
    <Wrap>
        <Header/>
        {
          Gnb === true
          ? <Contents/>
          :<ScrapContents/>
        }

        <BottomGnbWrap>
          <Home HomeColor={HomeColor} ScrapColor={ScrapColor} onClick={homeFun}>
              <HomeIcon>
                  <MdHomeFilled/>
              </HomeIcon>
              <HomeText>홈</HomeText>
          </Home>
          <Scrap HomeColor={HomeColor} ScrapColor={ScrapColor} onClick={scrapFun}>
              <ScrapIcon>
                  <BsFileText/>
              </ScrapIcon>
              <ScrapText>스크랩</ScrapText>
          </Scrap>
        </BottomGnbWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 375px;
  height: 812px;
  background: #F0F1F4;
  border-radius: 30px;
`
const BottomGnbWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  gap: 65px;
  position: absolute;
  width: 215px;
  height: 45px;
  left: 0px;
  top: 727px;
  background: #000000;
  border-radius: 30px;
  z-index : 3;
`

const Home = styled.div`
 ${(props) => props.HomeColor === true ? `color:#FFF` : props.ScrapColor === true ? `color:#6D6D6D` : `color : #6D6D6D`  };
`
const HomeIcon = styled.div`
  font-size : 28px;
  text-align: center;
`
const HomeText = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  margin-left: 9px;
`
const Scrap = styled.div`
 ${(props) => props.ScrapColor === false ? `color:#FFF` : props.HomeColor === false ? `color:#6D6D6D` : `color : #6D6D6D`  };
`
const ScrapIcon = styled.div`
  font-size : 25px;
  text-align: center;
`
const ScrapText = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
`
export default Main