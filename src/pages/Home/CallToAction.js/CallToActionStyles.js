import styled from 'styled-components';
import elevator from '../../../assets/elevators.jpg';

const MainContainer = styled.section`
width: 100vw; 
height: calc(100vh - 12rem);
position: relative;
#wrapper {
    width: 100vw;
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
    .icon {
        width: 30px;
        height: 30px;
        color: ${(props) => props.theme.colors.White};
    }
}
.return-button{
    position: absolute;
    left: 5.6rem;
    transform: translateY(-50%);
    img{
        margin-right: 3px;
    }
}
.forward-button  {
    right: 5.6rem;
    transform: translateY(-50%);
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
}
`;

const FirstContainer = styled.div`
width: 100vw;
height: calc(100vh - 12rem);
flex-shrink: 0;
background-image: url(${elevator});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
    width: fit-content;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.DarkGray};
}
h1{
    font-size: 3.2rem;
    width: fit-content;
    color: ${(props) => props.theme.colors.DarkBlue};
}
button{
    width: 10rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.Blue};
    color: ${(props) => props.theme.colors.White};
    border-radius: 5px;
    font-size: 1.6rem;
    margin-top: 2rem;
    cursor: pointer;
    &:hover{
        background-color: ${(props) => props.theme.colors.DarkBlue};
    }
}

`;
const SecondContainer = styled.div`
width: 100vw;
height: calc(100vh - 12rem);
flex-shrink: 0;
background-image: url(${elevator});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
    width: fit-content;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.DarkGray};
}
h1{
    font-size: 3.2rem;
    width: fit-content;
    color: ${(props) => props.theme.colors.DarkBlue};
}
button{
    width: 10rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.Blue};
    color: ${(props) => props.theme.colors.White};
    border-radius: 5px;
    font-size: 1.6rem;
    margin-top: 2rem;
    cursor: pointer;
    &:hover{
        background-color: ${(props) => props.theme.colors.DarkBlue};
    }
}

`;
const ThirdContainer = styled.div`
width: 100vw;
height: calc(100vh - 12rem);
flex-shrink: 0;
background-image: url(${elevator});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

p{
    width: fit-content;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.DarkGray};
}
h1{
    font-size: 3.2rem;
    width: fit-content;
    color: ${(props) => props.theme.colors.DarkBlue};
}
button{
    width: 10rem;
    height: 3rem;
    background-color: ${(props) => props.theme.colors.Blue};
    color: ${(props) => props.theme.colors.White};
    border-radius: 5px;
    font-size: 1.6rem;
    margin-top: 2rem;
    cursor: pointer;
    &:hover{
        background-color: ${(props) => props.theme.colors.DarkBlue};
    }
}
`;

export {
  MainContainer,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
};
