import styled from 'styled-components';
import elevators from '../../../assets/elevators.jpg';
import { desktopSectionPadding } from '../../../styles/GlobalStyles';

const MainContainer = styled.section`
width: 100%;
position: relative;
background-image: url(${elevators});
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
  color: white;
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
  border-radius: 1rem;
  transition: all 0.3s;
}
.differential-card:hover {
  background-color: ${(props) => props.theme.colors.Blue};
}
.differential-card-title {
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
}
.differential-card-text {
  font-size: 2rem;
  color: white;
}
.differential-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.Blue};
  opacity: 0.6;
  z-index: 1;
}
`;

const xablau = styled.section`

`;

export { MainContainer, xablau };
