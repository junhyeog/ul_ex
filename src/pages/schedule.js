import * as React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
import {ScheduleList} from '../components/schedule';
import {NavBar, OptionModal} from '../components';

const Schedule = () => {
    const Options = useState(false);

    
    return(<>
    <HeaderBox>
      <Slogan>피드</Slogan>
      <img src="/static/search.png" className="searchIcon" style={{width:"15px", height:"15px"}}/>
    </HeaderBox>
    <ScheduleList Options={Options[1]} />
    <NavBar/>
    <OptionModal display={Options[0]} displayChange={Options[1]} />
    </>);
}

export default Schedule;

const HeaderBox = styled.div`
  position: relative;
  width: 100vw;
  height: 55px;
  background-image: linear-gradient(116deg, #ff7676, #fc6d7f 31%, #f75698 83%, #f54ea2 99%);
  .searchIcon{
    position: absolute;
    top: 23px;
    right: 20px;

  }
`;

const Slogan = styled.div`
  position: absolute;
  top: 18px;
  left: 25px;
  width: 100px;
  height: 24px;
  font-family: Verdana;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  z-index:1;
`;
