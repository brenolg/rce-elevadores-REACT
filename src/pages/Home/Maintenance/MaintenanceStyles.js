import styled from 'styled-components';
import { desktopSectionPadding } from '../../../styles/GlobalStyles';

const MainContainer = styled.section`
width: 100%;
${desktopSectionPadding}
padding-bottom: 6rem;
gap: 3rem;
display: flex;
flex-direction: column;
background-color: ${(props) => props.theme.colors.White};
.service-title {
  font-size: 3.6rem;
    font-weight: bold;
    color: #0D2740;
}

`;

const MaintenanceContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
.card-container {flex-direction: column;
  display: flex;
  gap: 2rem;
  width: 33%;
}
.card-img {
    width: 100%;
    height: 20rem;
    border-radius: 0.8rem;
}
.card-title {
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.DarkBlue};
}
.card-txt {
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.DarkGray};
    text-align: justify;
    line-height: 150%;
    font-weight: 700;
}

`;

export { MainContainer, MaintenanceContainer };
