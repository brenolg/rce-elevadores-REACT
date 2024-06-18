import styled from 'styled-components';
import { desktopSectionPadding } from '../../../styles/GlobalStyles';
import bg from '../../../assets/contactBg.jpeg';

const MainContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30rem;
  flex-direction: row;
  position: relative;
  padding: 3rem;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  ${desktopSectionPadding}
  .contact-bg {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.DarkGray};
    background-color: #161616;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.96;
  }
  .logo-contact-us {
    width: 20%;
    position: relative;
    z-index: 2;
  }
   @media screen and (max-width: 1000px){
     .logo-contact-us {
      display: none;
     }
    
    
  }
`;

const NavContainer = styled.nav`
  color: ${(props) => props.theme.colors.White};
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  z-index: 2;
.nav-item {
  display: flex;
  gap: 0.8rem;
  font-size: 1.6rem;
  align-items: center;
  }
  @media screen and (max-width: 1000px){

    
  }
`;

export { MainContainer, NavContainer };
