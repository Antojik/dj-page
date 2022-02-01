import styled from 'styled-components';
import '../App.css';
import CirclePic from '../images/CirclePic.png';
import Columns from '../images/musicСolumns.png'; 
import PlayIco from '../images/PlayIco.png';
import Slider from '@mui/material/Slider';


const ThirdSection = styled.div`
  margin: 0 auto;
  width: 1110px;
  margin-top: 301px;
  display: flex;
`

const LeftSide = styled.div`
  width: 55%;
  .firstEllipse{
    position: absolute;
    border-radius: 50%;
    width: 510px;
    height: 510px;
    background: rgba(122, 102, 204, 0.3);
    .secondEllipse{
      position: relative;
      border-radius: 50%;
      width: 472px;
      height: 472px;
      background: rgba(122, 102, 204, 0.6);
      margin-left: 19px;
      margin-top: 19px;
      img{
        margin-left: 19px;
        margin-top: 19px;
      }
  }
}
`

const RightSide = styled.div`
  width: 45%;
`

const MusicSectionHeadline = styled.div`
  display: flex;
  align-items: center;
  p{
    margin-left: 30px;
    font-weight: bold;
    font-size: 48px;
    line-height: 72px;  
    color: #FFFFFF;
  }
`

const Player = styled.div`
  margin-top: 81px;
  display: flex;
`


const MusicSection = () =>{
  return (
    <ThirdSection>
      <LeftSide>
        <div className='firstEllipse'>
          <div className='secondEllipse'>
            <img src={CirclePic} alt='CirclePic'/>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <MusicSectionHeadline>
          <img  src={Columns} alt='HeadlinePic'/>
          <p>Last tracks</p>
        </MusicSectionHeadline>
        <Player>
          <img src={PlayIco} alt='PlayIco'/>
            <Slider />
        </Player>
      </RightSide>
    </ThirdSection>
  );
}

export default MusicSection;