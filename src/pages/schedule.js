import * as React from 'react';
import styled from 'styled-components';
import { NavBar } from '../components';

const Schedule = () => {
    return (<>
        <HeaderBox>
            <Logo src="/static/ulimeWhite2.png"></Logo>
            <Slogan>투데이</Slogan>
        </HeaderBox>
        <NavBar/>
    </>)
}
export default Schedule;

const HeaderBox = styled.div`
  position: relative;
  width: 100vw;
  height: 55px;
  background-image: linear-gradient(155deg, #ff7676, #fc6d7f 31%, #f75698 83%, #f54ea2 99%);
  text-align: center;
`;

const Logo = styled.img`
  position: relative;
  top: 83px;
  width: 70px;
  height: 74.3px;
  object-fit: contain;
`;

const Slogan = styled.div`
  position: absolute;
  top: 18px;
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
`;
