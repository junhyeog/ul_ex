import * as React from 'react';
import styled from 'styled-components';

const ScheduleList = ({Options}) => {
    return(<ContentList>
        <div className="cntBox">
            <img src="/static/userblack.png" className="usericon" style={{width:"3vh", height:"3vh"}}/> {/* 아이콘이 tmp이기에 크기 위에서 설정 */}
            <div className="createrName">크리에이터이름</div>
            <div className="uploadTime">업로드 시간</div>
            <div className="dateDay">DAY N. O요일</div>
            <div className="eventBar"></div>
            <div className="eventDot"></div>
            <div className="eventDot" style={{top:"164px"}}></div>
            <div className="eventDot" style={{top:"235px"}}></div>
            <div className="eventBox">
                <div className="eventName">EVENT</div>
                <div className="eventTime">시간-시간</div>
                <div className="eventCaption">설명</div>
            </div>
            <div className="eventBox" style={{top:"164px"}}>
                <div className="eventName">EVENT</div>
                <div className="eventTime">시간-시간</div>
                <div className="eventCaption">설명</div>
            </div>
            <div className="option" onClick={() => Options(true)}>...</div>
        </div>
        <div className="cntBox">
            <img src="/static/userblack.png" className="usericon" style={{width:"3vh", height:"3vh"}}/> {/* 아이콘이 tmp이기에 크기 위에서 설정 */}
            <div className="createrName">유라임 Ulime</div>
            <div className="uploadTime">2시간전</div>
            <div className="dateDay">29. 일요일</div>
            <div className="eventBar"></div>
            <div className="eventDot"></div>
            <div className="eventDot" style={{top:"164px"}}></div>
            <div className="eventDot" style={{top:"235px"}}></div>
            <div className="eventBox">
                <div className="eventName">6차 구현</div>
                <div className="eventTime">18:00 - 20:00</div>
                <div className="eventCaption">피드 게시물 구현</div>
            </div>
            <div className="eventBox" style={{top:"164px"}}>
                <div className="eventName">6차 수정</div>
                <div className="eventTime">20:00 - 22:00</div>
                <div className="eventCaption">피드 게시물 수정</div>
            </div>
            <div className="option" onClick={() => Options(true)}>...</div>
        </div>
        
    </ContentList>);
}

export default ScheduleList;

const ContentList = styled.div`
    display: flex; width: 100vw; flex-direction: column; 
    margin-top: 3vh;
    .cntBox {
        position: relative;
        display: block;
        margin-bottom: 2.5vh;
        margin-left: 1.9vw;
        width: 95.5%;
        height: 254px;
        border-radius: 3px;
        border: solid 1px #707070;
        background-color: #ffffff;
    }
    .usericon {
        position: absolute; left: 11px; top: 14px;
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
    .createrName{
        position: absolute; left: 55px; top: 16px;
        width: 50vw;
        height: 12px;
        font-family: HelveticaNeue;
        font-size: 10px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: 1.5px;
        text-align: left;
        color: #707070;
    }
    .uploadTime{
        position: absolute; left: 55px; top: 33px;
        width: 50vw;
        height: 7px;
        font-family: HelveticaNeue;
        font-size: 5px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: 0.75px;
        text-align: left;
        color: #707070;
    }
    .dateDay{
        position: absolute; left: 12px; top: 65px;
        width: 50vw;
        height: 10px;
        font-family: Roboto;
        font-size: 8px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        color: #4d4d4d;
    }
    
    .eventBar{
        position: absolute; left: 26.5px; top: 97.5px;
        width: 0px;
        height: 156.5px;
        border-left: solid 3.5px #707070;
        background-color: #ffffff;
    }
    .eventDot{
        position: absolute; left: 25px; top: 93px;
        width: 7px;
        height: 7px;
        background-color: #707070;
        border-radius: 50%;
    }
    
    .eventBox{
        position: absolute; left: 54px; top: 93px;
        dispay: flex;
        flex-direction: column;
        width: 80vw;
    }
    .eventBox .eventName{
        position: absolute; top: 0px;
        width: 100%;
        height: 10px;
        font-family: Roboto;
        font-size: 8px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        color: #4d4d4d;
        margin-bottom: 1px;
    }
    .eventBox .eventTime {
        position: absolute; top: 11px;
        width: 100%;
        height: 10px;
        font-family: Roboto;
        font-size: 8px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        color: #4d4d4d;
        padding-left: 1px;
        margin-bottom: 4px;
      }
      .eventBox .eventCaption{
        position: absolute; top: 25px;
        width: 100%;
        height: 9px;
        font-family: Roboto;
        font-size: 8px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.25;
        letter-spacing: normal;
        text-align: left;
        color: #4d4d4d;
      }
    .option {
        position: absolute; top: 1.5vh; left: 90vw;
        color: #707070;
        font-size: 25px;
        transform: rotate(90deg);
    }
    
`;
