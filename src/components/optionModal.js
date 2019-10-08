import * as React from 'react';
import styled from 'styled-components';

const OptionModal = ({display, displayChange}) => {
    return (
    <CateModal style={{display:display!==false?"block":"none"}}>
        <div className="options">
            옵션
        </div>
        <div className="back" onClick={() => displayChange(false)}>취소</div>
    </CateModal>);
}

export default OptionModal;

const CateModal = styled.div`
    background-color: rgba(68, 68, 68, 0.4);
    position: fixed; top: 0%; left: 0%;
    display: block; width: 100vw; height: 100vh;
    z-index: 2;
    .options {
        position: fixed; left: 9vw; bottom: 11vh;
        width: 81vw; height: 4vh; padding-top: 2vh;
        text-align: center;
        border-radius: 15px;
        opacity: 1;
        background-color: #ffffff;
        z-index: 4;
    }
    .back {
        position: fixed; left: 9vw; bottom: 3vh;
        width: 81vw; height: 4vh; padding-top: 2vh;
        text-align: center;
        border-radius: 15px;
        opacity: 1;
        background-color: #ffffff;
        z-index: 4;
    }
`;
