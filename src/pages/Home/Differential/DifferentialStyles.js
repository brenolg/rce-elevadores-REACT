import styled from 'styled-components';
import elevators from '../../../assets/elevators.jpg';
import { desktopSectionPadding } from '../../../styles/GlobalStyles';

const MainContainer = styled.section`
  width: 100%;
  position: relative;
  background-image: url(${elevators});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  z-index: 10;
  ${desktopSectionPadding}
  .differential-title {
    font-size: 3.6rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.White};
    text-align: center;
    position: relative;
    z-index: 10;
  }
  .differential-cards-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  .differential-card{ 
    position: relative;
    z-index: 10;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    border: 0.1rem solid white;
    text-align: center;
    border-radius: 1.6rem;
    transition: all 0.3s;
  }
  .differential-card:hover {
    background-color: ${(props) => props.theme.colors.Blue};
  }
  .differential-card-title {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.White};
    font-weight: 600;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.9);
  }
  .differential-card-text {
    font-size: 2rem;
    color: ${(props) => props.theme.colors.White};
    font-weight: 500;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.9);
  }
  .differential-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.Blue};
    opacity: 0.7;
    z-index: 1;
  }
  @media screen and (max-width: 1000px){
    padding: 3rem;
    .differential-cards-container {
      grid-template-columns: 1fr;
    }
    
  }
`;

const xablau = styled.section`

`;

export { MainContainer, xablau };
