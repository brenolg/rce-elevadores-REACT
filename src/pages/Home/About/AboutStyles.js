import styled from 'styled-components';
import background from '../../../assets/elevator-btn.jpg';
import { desktopSectionPadding } from '../../../styles/GlobalStyles';

const MainContainer = styled.section`
  width: 100%;
  padding: 3rem;
  ${desktopSectionPadding}
  background-color: ${(props) => props.theme.colors.White};
  
.title {
  font-size: 3.6rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.DarkBlue};
  margin-bottom: 2rem;
}
.divider {
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.DarkGray};
  margin-bottom: 2rem;
}
.about-main-container {
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
}
.paragraph-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 6rem;
}
.paragraph {
    font-size: 2rem;
    text-align: justify;
    line-height: 2.5rem;
    color: ${(props) => props.theme.colors.DarkGray};
  }
`;

const ValuesMainContainer = styled.div`
  width: 100%;
  position: relative;
  .values-main-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.colors.White};
    z-index: 2;
    width: 50%;
    position: relative;
  }
  .values-bg {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${background});
    background-size: cover;
    background-position: left ;
    border-radius: 1rem;
    left: 0;
    z-index: 1;
  }
.values-sub-container {
  padding: 3rem;
  border-radius: 1.2rem;
  position: relative;
  width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.DarkGray};
  transition: all 0.3s;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.White};
}
.values-sub-container:hover {
  background-color: ${(props) => props.theme.colors.Blue};
  color: ${(props) => props.theme.colors.White};
  transform: scale(1.05);
  z-index: 3;
}
.value-title {
  font-size: 2rem;
  font-weight: bold;
  padding:  0 2rem;
  text-align: center;
}
.value-text {
  font-size: 1.6rem;

  text-align: center;
  font-weight: 500;
}
`;

export { MainContainer, ValuesMainContainer };
