import styled from 'styled-components';
import '../App.css';
import Logo from '../images/Logo.png';
import LogoName from '../images/LogoName.png';
import PlayIco from '../images/PlayIco.png';
import FirstNewsPic from '../images/FirstNewsPic.png';
import SecondNewsPic from '../images/SecondNewsPic.png';
import ThirdNewsPic from '../images/ThirdNewsPic.png';


const StyledHeader = styled.div`
  z-index: 1;
  margin: 0 auto;
  width: 1110px;
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
    border-radius: 20px 0px 20px 0px;
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
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }
`

const Header = () => {
  return (
    <StyledHeader>
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
        <img src={PlayIco} alt='PlayIco' />
        <div id="horizontal-line"></div>
        <div id="vertical-line"></div>
      </Player>
      <News>
        <div>
          <img src={FirstNewsPic} alt='first' />
          <div id="second-cont"></div>
          <p id='first-p'>Working on my upcoming full-lenth<br/>album that`s releasing later this year.</p>
        </div>
        <div>
          <img src={SecondNewsPic} alt='second' />
          <div id="second-cont"></div>
          <p id='second-p'>Halloween vibes. <br /> Listen my new track!</p>
        </div>
        <div>
          <img src={ThirdNewsPic} alt='third' />
          <div id="second-cont"></div>
          <p id='third-p'>WarForLove is OUT NOW!! <br /> Stream it here!</p>
        </div>
      </News>
    </StyledHeader>
  );
}

export default Header;