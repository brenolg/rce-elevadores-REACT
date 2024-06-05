// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';
import { desktopSectionPadding } from '../styles/GlobalStyles';

const FixedContainer = styled.header`
  background-color: ${(props) => props.theme.colors.DarkGray};
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-style: uppercase;
  color: ${(props) => props.theme.colors.White};

  padding: 1.2rem;
  .header-nav-item {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.White};
    font-weight: 500;
  }
  ${desktopSectionPadding}
`;
const StickyContainer = styled.header`
  background-color: ${(props) => props.theme.colors.DarkBlue};
  width: 100%;
  padding: 1.2rem;
  ${desktopSectionPadding}
  display: flex;
  justify-content: space-between;
  font-style: uppercase;
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 99;
  align-items: center;
  height: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.colors.White};
  text-transform: uppercase;
  .logo-header {
    height: 6rem;
  }
  .header-nav {
    display: flex;
    gap: 3.2rem;
  }
`;

export { FixedContainer, StickyContainer };
