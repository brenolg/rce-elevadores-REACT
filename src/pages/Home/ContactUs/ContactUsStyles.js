import styled from 'styled-components';
import { desktopSectionPadding } from '../../../styles/GlobalStyles';

const MainContainer = styled.footer`
width: 100%;
display: flex;
justify-content: center;
gap: 6rem;
flex-direction: row;
background-color: ${(props) => props.theme.colors.DarkGray};
padding: 3rem;
${desktopSectionPadding}
.logo-contact-us {
  width: 20%;
}

`;

const NavContainer = styled.nav`
color: white;
display: flex;
flex-direction: column;
gap: 1.2rem;
.nav-item {
  display: flex;
  gap: 0.8rem;
  font-size: 1.6rem;
  align-items: center;
}

`;

export { MainContainer, NavContainer };
