// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const MainContainer = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 6rem;
  right: 6rem;
  z-index: 99;
  background-color: transparent;
  color: ${(props) => props.theme.colors.White};

  border-radius: 50%;
  padding: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.35);
  transition: all 0.3s;
  background-color: ${(props) => props.theme.colors.Blue};
  &&:hover {
    background-color: ${(props) => props.theme.colors.DarkBlue};
  }
  .icon {
    width: 3.6rem;
    height: 3.6rem;
  }
  @media screen and (max-width: 840px) {
    bottom: 3rem;
    right: 3rem;
    padding: 1.2rem;
    .icon {
      width: 2rem;
      height: 2rem;
    }
    
  }
`;

export default MainContainer;
