import styled from 'styled-components';
import './App.css';
import HeaderImage from './images/HeaderImage.png';
import Logo from './images/Logo.png';
import LogoName from './images/LogoName.png';
import PlayIco from './images/PlayIco.png';
import FirstNewsPic from './images/FirstNewsPic.png';
import SecondNewsPic from './images/SecondNewsPic.png';
import ThirdNewsPic from './images/ThirdNewsPic.png';
import Columns from './images/musicСolumns.png';
import RightSidePic1 from './images/RightSidePic1.png';
import RightSidePic2 from './images/RightSidePic2.png';


const Header = styled.div`
  z-index: 1;
  margin: 0 auto;
  width: 1110px;
`

const ImageContainer = styled.div`
  z-index: -1;
  position: absolute;
`

const HeaderLine = styled.div`
 display: flex;
 justify-content: space-between;
`

const LogoContainer = styled.div`
  margin-top: 20px;
  margin-left: 80px;
  width: 223px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

const Nav = styled.div`
  margin-top: 20px;
  margin-right: 80px;
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    line-height: 100%;
    color: #fff;
    text-decoration: none;
  }
`

const SecondLine = styled.p`
  margin-top: 350px;
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
`

const ThirdLine = styled.p`
  display: flex;
 
  font-weight: bold;
  font-size: 100px;
  line-height: 150px;
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
`

const Player = styled.div`
  margin-top: 40px; 
  display: flex;
  #horizontal-line{
    width: 887px;
    height: 0px;
    margin: 10px 0px 0px 40px;
    border: 2px solid white;
  }
  #vertical-line{
    position: relative;
    right: 800px;
    border: 2px solid #7A66CC;
  }
`

const News = styled.div`  
  position: relative;
  height: 300px;
  margin-top: 140px;
  display: flex;
  justify-content: space-between;

  #second-cont{
    border-radius: 20px 0px;
    opacity: 70%;
    width: 350px;
    height: 90px;
    position: absolute;
    bottom: 0;
    background-color: #7A66CC;
  }
  
  #first-p{ 
    position: absolute;
    bottom: 21px;
    left: 20px;
    width: 310px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }
  
  #second-p{
    position: absolute;
    bottom: 21px;
    left: 410px;
    width: 310px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  #third-p{
    position: absolute;
    bottom: 21px;
    left: 790px;
    width: 310px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }
`

const FirstSection = styled.div`
  padding-top: 180px;
  margin: 0 auto;
  width: 1110px;
  display: flex;
`

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  #firstSectionHeader{
    margin-left: 30px;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;
  }
  .firstSectionParagraph{
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    opacity: 0.7;
  }
  .sss{
    margin-top: 60px;
  }
  .textPurpleBoxes{
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    margin-left: 20px;
  }
  .purpleBoxes{
    width: 30px;
    height: 30px;
    background-color: #7A66CC;
    border-radius: 10px 0px;
  }
`

const RightSide = styled.div`
  width: 50%;
  height: 594px;
  color: white;
`

const StyledPurpleBoxesContainer = styled.div`
  width: 100%;
  height: 90px;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`

const BrightLightsCont = styled.div`
  display: flex;
  .secondBox{
    margin-left: 40px;
  }
  .fourthBox{
    margin-left: 61px;
  }
`

const StyledRightSidePic1 = styled.img`
  margin: 60px 0px 0px 125px;
  z-index: 1;
`

const StyledRightSidePic2 = styled.img`
  position: relative;
  bottom: 342px;
  left: 220px;
  z-index: -1;
`

function App() {
  return (
    <div className="App">
      <ImageContainer>
        <img src={HeaderImage} alt="HeaderImg" />
      </ImageContainer>
      <Header>
        <HeaderLine>
          <LogoContainer>
            <img src={Logo} alt="Logo" />
            <img src={LogoName} alt="LogoName" />
          </LogoContainer>
            <Nav>
              <div><a href='#'>About</a></div>
              <div><a href='#'>News</a></div>
              <div><a href='#'>Music</a></div>
              <div><a href='#'>Media</a></div>
              <div><a href='#'>Tours</a></div>
              <div><a href='#'>Contacts</a></div>
            </Nav>
        </HeaderLine>
        <SecondLine>New Single</SecondLine>
        <ThirdLine>War For Love</ThirdLine>
        <Player>
          <img src={PlayIco} alt='PlayIco'/>
          <div id="horizontal-line"></div>
          <div id="vertical-line"></div>
        </Player>
        <News>
          <div>
            <img src={FirstNewsPic} alt='first'/>
            <div id="second-cont">
            </div>
            <p id='first-p'>Working on my upcoming full-lenth album that`s releasing later this year.</p>
          </div>
          <div>
            <img src={SecondNewsPic} alt='second'/>
            <div id="second-cont">
            </div>
            <p align="left" id='second-p'>Halloween vibes. <br/> Listen my new track!</p>
          </div>
          <div>
            <img src={ThirdNewsPic} alt='third'/>
            <div id="second-cont">
            </div>
            <p align="left" id='third-p'>WarForLove is OUT NOW!! <br/> Stream it here!</p>
          </div>
        </News>
      </Header>
      <FirstSection>
        <LeftSide>
          <img src={Columns} alt='Columns'/>
          <p id="firstSectionHeader">Bright Lights</p>
          <div>
            <p class="firstSectionParagraph sss">Bright Lights is a multi-Grammy nominated singer, songwriter, DJ<br/> and record producer. She has written for numerous</p><br/>
            <p class="firstSectionParagraph">pop stars including Britney Spears, Justin Bieber, Usher and<br/>Beyoncé. Her catalog has amassed over 1 billion streams<br/>worldwide. More than 100 million of those streams can be<br/>attributed to her artist career and include such hits as Porter<br/>Robinson's "Language," 3LAU's "How You Love Me" and her own<br/> single "Runaway." She was also a featured vocalist on Zedd's #1 Clarity album. Her latest music video, "Put It Down," reached 1 million streams in the first week, releasing independently. Bright Lights is currently in the studio working on a self-produced album slated for release in 2020. </p>
          </div>
          <StyledPurpleBoxesContainer>
            <BrightLightsCont>
              <div class="purpleBoxes firstBox"></div>
              <p class="textPurpleBoxes firstPar">Based in: Los Angeles</p>
            </BrightLightsCont>
            <BrightLightsCont>
              <div class="purpleBoxes secondBox"></div>
              <p class="textPurpleBoxes secondPar">Founded in 2011</p>
            </BrightLightsCont>
            <BrightLightsCont>
              <div class="purpleBoxes thirdBox"></div>
              <p class="textPurpleBoxes thirdPar">Genre: #DancePop</p>
            </BrightLightsCont>
            <BrightLightsCont>
              <div class="purpleBoxes fourthBox"></div>
              <p class="textPurpleBoxes fourthPar">Label: 333 Recordings</p>
            </BrightLightsCont>
          </StyledPurpleBoxesContainer>
        </LeftSide>
        <RightSide>
          <div>
            <StyledRightSidePic1 src={RightSidePic1} alt='RightSidePic1'/>
            <StyledRightSidePic2 src={RightSidePic2} alt='RightSidePic2' />
          </div> 
        </RightSide>
      </FirstSection>
    </div>
  );
}

export default App;
