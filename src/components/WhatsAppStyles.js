// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const MainContainer = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  z-index: 99;
  background-color: transparent;
  color: ${(props) => props.theme.colors.White};
  background-color: ${(props) => props.theme.colors.Blue};
  border-radius: 50%;
  padding: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export default MainContainer;
