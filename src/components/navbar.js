import React from 'react';
import {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Axios from 'axios';
import {BACK_URL} from '../config';

const NavBar = () => {
  const nowRoute = useState('');
  let profileState = useState({
    nickname: "Nickname",
    birthday: "1990-01-01",
    gender: "남성",
    name: "name",
    description: "tmp",
    email: "",
    ulimeId: "",
    channels: []
  });
  let role = useState("subscriber");


  useEffect(() => {
    console.log(nowRoute[0]);
    if(nowRoute[0] !== Router.route) {
      nowRoute[1](Router.route);
    }
    console.log(Router.query);
    if(Router.query.detail === "profileedit") {
      SettingCategory[1](1);
    }
    let x = window.sessionStorage.getItem("id");
    Axios.get(`${BACK_URL}/user/${x}`, {withCredentials: true})
    .then(res => {
        console.log(res.data)
        console.log(res.data.user.nickname, res.data.user.birthday);
        if(profileState[0].nickname !== res.data.user.nickname) {
          profileState[1]({
            nickname: res.data.user.nickname,
            birthday: res.data.user.birthday,
            name: res.data.user.name,
            gender: res.data.user.gender,
            description: res.data.user.description,
            email: res.data.user.email,
            ulimeId: res.data.user.ulimeId,
            channels: res.data.user.channels
          });
        }
    });
    let check = window.sessionStorage.getItem("role");
    if(check !== role[0]) {
      role[1](check);
    }
  }, []);


  if(role[0] === "creator") {
    return (
      <NavBarLine>
        <NavBarBox>
        <NavBarIcon src='/static/home.png' style={{left: '28px'}}  onClick={() => window.location.href="/today"}/>
        <NavBarIcon src='/static/feed.png' style={{left: '103px'}} onClick={() => window.location.href="/feed"}/>
        <NavBarIcon src='/static/musica-searcher.png' style={{left: '178px'}}/>
        <NavBarIcon src='/static/notifications-button.png' style={{left: '254px'}} onClick={() => window.location.href="/alert"}/>
        <NavBarIcon src='/static/userblack.png' style={{left: '328px'}} onClick={() => window.location.href=`/creator?id=${profileState[0].channels[0]}`} />
        </NavBarBox>
      </NavBarLine>
    );
  }
  return (
    <NavBarLine>
      <NavBarBox>
      <NavBarIcon src='/static/home.png' style={{left: '28px'}}  onClick={() => window.location.href="/today"}/>
      <NavBarIcon src='/static/feed.png' style={{left: '103px'}} onClick={() => window.location.href="/feed"}/>
      <NavBarIcon src='/static/musica-searcher.png' style={{left: '178px'}}/>
      <NavBarIcon src='/static/notifications-button.png' style={{left: '254px'}} onClick={() => window.location.href="/alert"}/>
      <NavBarIcon src='/static/userblack.png' style={{left: '328px'}} onClick={() => window.location.href=`/profile`} />
      </NavBarBox>
    </NavBarLine>
  );
}

export default NavBar;

const NavBarIcon = styled.img`
  position: absolute;
  width: auto;
  height: 20px;
  top: 16.5px;
`;

const NavBarLine = styled.div`
  position: fixed;
  bottom: 0px;
  height: 54.5px;
  width: 100vw;
  border-top: 1px solid black;
  z-index: 2;
  background-color: white;
`
const NavBarBox = styled.div`
  position: absolute;
  bottom: 0px;
  height: 54.5px;
  width: 375px;
  left: 50%;
  transform: translate(-50%);
`
