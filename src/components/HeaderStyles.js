import styled from 'styled-components';

const MainContainer = styled.div`
  background: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  color: red;
`;

const li = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;

export { MainContainer, li };
