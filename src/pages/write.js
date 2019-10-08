import * as React from 'react';
import styled from 'styled-components';
import {NavBar, WriteSchedule} from '../components';

const Write = () => {
    const back = () => {
      window.history.back();
    }
    return(<>
    <HeaderBox>
      <img src="/static/arrow_white.png"  style={{cursor: "pointer", position: "absolute", top: "20px", left: "30px", height: "18px", 'z-index': "5"}} onClick={back}/>
      <Slogan>일정 등록하기</Slogan>
    </HeaderBox>
    <WriteSchedule/>
    <NavBar/>
    </>);
}

export default Write;

const HeaderBox = styled.div`
  width: 100vw;
  height: 55px;
  background-image: linear-gradient(116deg, #ff7676, #fc6d7f 31%, #f75698 83%, #f54ea2 99%);
`;

const Slogan = styled.div`
  position: absolute;
  top: 16px;
  width: 100vw;
  height: 26px;
  font-family: Verdana;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
