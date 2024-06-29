import styled from 'styled-components';
import bg1 from '../../../assets/callToAction1.png';
import bg2 from '../../../assets/callToAction2.jpg';
import bg3 from '../../../assets/callToAction3.jpg';

const MainContainer = styled.section`
width: 100%; 
height: calc(100vh - 15.88rem);
position: relative;
    #wrapper {
        width: 100%;
    }
    #carousel {
        position: relative;
        overflow: hidden; 
        display: flex;
        justify-content: flex-start;
    }
    .return-button, .forward-button {
        position: absolute;
        height: 40px;
        width: 40px;
        top: 47%;
        border-radius: 360px;
        background: ${(props) => props.theme.colors.Blue};
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all.3s;
        .icon {
            width: 30px;
            height: 30px;
            color: ${(props) => props.theme.colors.White};
        }
    }
    .forward-button:hover, .return-button:hover {
        background: ${(props) => props.theme.colors.DarkBlue};
    }
    .return-button{
        position: absolute;
        left: 8rem;
        transform: translateY(-50%);
        z-index: 2;
        img{
            margin-right: 3px;
        }
    }
    .forward-button  {
        right: 8rem;
        transform: translateY(-50%);
        z-index: 2;
        img{
            transform: rotate(180deg);
            margin-left: 3px;
        }
    }
    .counter {
        position: absolute;
        bottom: 4.8rem;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 24px;
        position: relative;
        z-index: 5;
    }
    .counter-circle {
        transition: background-color 0.3s;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        box-shadow: 0 0 0.5rem  rgba(0, 0, 0, 0.6);
    }
    @media screen and (max-width: 840px) {
        .forward-button  {
        right: 5%;
        }
        .return-button {
        left: 5%;
        }
    }
    @media screen and (max-width: 650px) {
        .forward-button  {
            right: 5%;
        }
        .return-button {
            left: 3%;
        }
        .forward-button:hover, .return-button:hover {
            background: ${(props) => props.theme.colors.Blue};
        }
    }
`;

const callToAction = styled.div`
    width: 100vw;
    height: calc(100vh - 15.88rem);
    flex-shrink: 0;
    background-image: url(${bg1});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .bg-call-to-action{
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
    p{
        width: fit-content;
        font-size: 1.8rem;
        color: ${(props) => props.theme.colors.White};
        position: relative;
        margin-bottom: 0.6rem;
        z-index: 2;
        text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.7);
    }
    h1{
        font-size: 3.2rem;
        width: fit-content;
        letter-spacing: 0.15rem;
        color: ${(props) => props.theme.colors.White};
        position: relative;
        z-index: 2;
        text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.7);
    }
    .call-to-action-btn{
        padding: 0.6em 0.8em ;
        background-color: ${(props) => props.theme.colors.Blue};
        color: ${(props) => props.theme.colors.White};
        border-radius: 1rem;
        font-size: 2rem;
        margin-top: 6rem;
        border: 0.1rem solid ${(props) => props.theme.colors.White};
        transition: all 0.3s;
        cursor: pointer;
        position: relative;
        z-index: 2;
        box-shadow: 0 0 0.5rem  rgba(0, 0, 0, 0.5);
        &:hover{
            background-color: ${(props) => props.theme.colors.DarkBlue};
    }
    }
    @media screen and (max-width: 840px) {
        h1 {
            font-size: 2.8rem;
        }
    }
    @media screen and (max-width: 650px) {
        h1 {
            font-size: 2rem;
            max-width: 70%;
            text-align: center;
        }
        p {
            font-size: 1.4rem;
            max-width: 70%;
            text-align: center;
        }
        .call-to-action-btn{
        font-size: 1.6rem;
        }
    }
`;

const FirstContainer = styled(callToAction)`
    background-image: url(${bg1});
`;
const SecondContainer = styled(callToAction)`
    background-image: url(${bg2});
`;
const ThirdContainer = styled(callToAction)`
    background-image: url(${bg3});
`;

export {
  MainContainer,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
};
