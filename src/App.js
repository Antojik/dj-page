import styled from 'styled-components';
import './App.css';
import Header from './header/Header';
import HeaderImage from './images/HeaderImage.png';
import NewsSection from './news_section/NewsSection';

const ImageContainer = styled.div`
  z-index: -1;
  position: absolute;
`

function App() {
  return (
    <div className="App">
      <ImageContainer>
        <img src={HeaderImage} alt="HeaderImg" />
      </ImageContainer>
      <Header/>
      <NewsSection/>
    </div>
  );
}

export default App;
