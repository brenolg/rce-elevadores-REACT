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
  color: ${(props) => props.theme.colors.Blue};
  letter-spacing: 0.08rem;
}
  @media screen and (max-width: 1000px) { 
    padding: 3rem;
  }

`;

const MaintenanceContainer = styled.div`
  width: 100%;
  display: flex;
  gap : 2rem;
.card-container {
  flex-direction: column;
  display: flex;
  width: 33%;
  border-radius: 1.6rem;
  box-shadow: 0 0 3rem #02102450;
  transition: transform 0.6s;
}
.card-container:hover {
  transform: scale(1.03);
}
.card-img {
    width: 100%;
    border-radius: 1.6rem;
}
.card-title {
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.colors.Blue};
  letter-spacing: 0.06rem;
  padding-top: 1.6rem;
  padding-bottom: 0.8rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
}
.card-txt {
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.DarkGray};
  text-align: justify;
  line-height: 150%;
  font-weight: 600;
  letter-spacing: 0.01rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  .card-container {
      width: 100%;
    }
    }
`;

export { MainContainer, MaintenanceContainer };
