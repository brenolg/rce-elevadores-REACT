import styled from 'styled-components';
import background from '../../../assets/elevator-btn.jpg';
import { desktopSectionPadding } from '../../../styles/GlobalStyles';

const MainContainer = styled.section`
  width: 100%;
  padding: 6rem;
  ${desktopSectionPadding}
  background-color: ${(props) => props.theme.colors.White};
  
  .title {
    font-size: 3.6rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.Blue};
    margin-bottom: 2rem;
    letter-spacing: 0.08rem;
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
  }
  .paragraph {
    font-size: 1.8rem;
    text-align: justify;
    line-height: 3rem;
    letter-spacing: 0.05rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.DarkGray};
  }
  @media screen and (max-width: 1000px) {
    padding: 3rem;
    .about-main-container {
    display: grid;
    gap: 3rem;
    grid-template-columns: 1fr ;
  }

    
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
    background-position: left;
    border-radius: 1rem;
    left: 0;
    z-index: 1;
  }
.values-sub-container {
  padding: 3rem;
  border-radius: 0.5rem;
  position: relative;
  width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.DarkGray};
  transition: all 0.3s;
  z-index: 2;
  background-color: ${(props) => props.theme.colors.LightGray};
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
  text-align: center;
  letter-spacing: 0.1rem;
}
.value-text {
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  text-align: center;
  font-weight: 500;
}
@media screen and (max-width: 1000px) {
    .values-main-container {
      flex-direction: row;
      width: 100%;
    }
    .values-sub-container {
      width: 30%;
    
    }
    
}
@media screen and (max-width: 750px) {

 .values-main-container {
  flex-direction: column;
  gap: 3rem;
  display: none;
 }
 .values-sub-container {
  width: 100%;
 }}
`;

export { MainContainer, ValuesMainContainer };
