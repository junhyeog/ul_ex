import Axios from 'axios';
import React, { useEffect } from 'react';
import Link from 'next/link';
import styled  from 'styled-components';

const Index = () => {
  useEffect(()=> {
  });


  return (
    <BackGround>
      <Slogan>오늘의 크리에이터, 유라임</Slogan>
      <Logo src="/static/ulimeWhite2.png"></Logo>
      <StartButton>
        <Link href="/login">
          <StartString>시작하기!</StartString>
        </Link>
      </StartButton>
    </BackGround>
  )
}

export default Index;


const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(172deg, #ff7676, #fc6d7f 31%, #f75698 83%, #f54ea2 99%);
  text-align:center;
  margin:0 auto;
`;
const Logo = styled.img`
  position: relative;
  top: 238px;
  width: 146px;
  height: auto;
  object-fit: contain;
`
const Slogan = styled.div`
  position: relative;
  top: 428px;
  width: 182px;
  height: 20px;
  font-family: Verdana;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  left: 50%;
  transform: translate(-50%, 0);
`
const StartButton = styled.div` 
  position: absolute;
  top: 514px;
  width: 297px;
  height: 44px;
  border-radius: 22px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  left: 50%;
  text-align:center;
  transform: translate(-50%, 0);
`
const StartString = styled.div `
  position: relative;
  width: 100px;
  height: 20px;
  top: 12px;
  font-family: HelveticaNeue;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 2.25px;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
  color: #ff7676;
`
