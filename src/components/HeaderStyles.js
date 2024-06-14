// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const FixedContainer = styled.header`
  background-color: ${(props) => props.theme.colors.DarkGray};
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.White};
  padding: 1.2rem;
  .header-nav-item {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    font-size: 1.4rem;
    letter-spacing: 0.05rem;
    color: ${(props) => props.theme.colors.White};
    font-weight: 500;
  }
  padding-left: 18rem;
  padding-right: 18rem;
`;
const StickyContainer = styled.header`
  background-color: ${(props) => props.theme.colors.DarkBlue};
  width: 100%;
  padding: 1.2rem;
  padding-left: 18rem;
  padding-right: 18rem;
  display: flex;
  justify-content: space-between;
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
    box-shadow: 0 0 1rem #021024;
    letter-spacing: 0.18rem;
  .logo-header {
    height: 9rem;
  }
  .header-nav {
    display: flex;
    gap: 3.2rem;
  }
  .link-scroll {
    cursor: pointer;
  }
`;

export { FixedContainer, StickyContainer };
