import styled, { keyframes } from "styled-components";
import { PageHeader, PageHeaderStyled } from "../../components/ui";
import { blue, pink, typeScale } from "../../utils";

export const HomeWrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 920px) {
    grid-template-rows: 1fr 1fr;
  }
`;

export const PictureContainer = styled.aside`
  grid-column:8/13;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 1204px) {
    gap: 2.5rem;
  }
  @media screen and (max-width: 920px) {
    grid-column: 1/ 13;
    align-self: end;
    padding-inline: 1rem;
    justify-self: center;
    align-self: center;
  }
  @media screen and (max-width: 480px) {
    gap: 1.5rem;
  }

  .box {
      position: relative;
      width: 400px;
      height: 400px;
      background: rgba(0,0,0,0.5);
      border-radius: 50%;
      overflow:hidden;

  }
    
  .box:: before{
    content: '';
    position: absolute;
    inset: -10px 140px;
    background: linear-gradient(315deg,#57886C,#E1AD01);
    transition: 0.5s;
    animation: animate 4s linear infinite;
    }

  .box:hover::before
  {
    inset: -20px 0px;
  }

  @keyframes animate{
      0%
    {
      transform: rotate(0deg);
    }   
     0%
    {
      transform: rotate(360deg);
    }
  }

  .box:: after
  {
      content: '';
      position: absolute;
      inset: 6px;
      background: #1F1F1F;
      border-radius: 50%;
      z-index: 1;
  }
  .contect
    {
      position: absolute;
      inset: 30px;
      border: 6px solid unset;
      z-index: 3;
      border-radius: 50%;
      overflow: hidden;
    }
  .contect img
  {
    position: absolute;
    object-fit: cover;
  }


`;

export const TextContainer = styled.section`
  grid-column: 2/ 8;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  @media screen and (max-width: 1204px) {
    gap: 2.5rem;
  }
  @media screen and (max-width: 920px) {
    grid-column: 1/ 13;
    align-self: end;
    padding-inline: 1rem;
    justify-self: center;
    align-self: center;
  }
  @media screen and (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const Name = styled.h1`
  font-size: ${typeScale.bigDisplay};
  font-weight: bolder;
  margin: 0;
  background: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.display};
  }

  @media screen and (max-width: 480px) {
    font-size: ${typeScale.headline};
    text-align: center;
  }
`;

const textRotate1 = keyframes`
0%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
40%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
60%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
100%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
`;

const textRotate2 = keyframes`
0%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
40%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
60%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
100%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
`;

export const Position = styled(PageHeaderStyled)`
  background: unset;
  line-height: unset;
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  margin-block: 0;
  margin-inline: 0;
  margin: 0;
  padding: 0;
  position: relative;
  color: #57886C;
  cursor: default;
  .text {
    span {
      display: inline-block;
      will-change: transform;
      transform-style: preserve-3d;
      transform-origin: bottom;
      animation: ${textRotate1} 2.4s infinite alternate;
    }
    &.second {
      color: #E1AD01;
      position: absolute;
      top: 2%;
      left: 0;
      span {
        transform-origin: bottom;
        transform: translate3d(0, 100%, 0) rotateX(-90deg);
        animation: ${textRotate2} 2.4s infinite alternate;
      }
    }
  }
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.title};
  }
  @media screen and (max-width: 480px) {
    font-size: ${typeScale.subtitle};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .text.second {
      left: auto;
    }
  }
`;

export const AnimatedSpan = styled.span`
  transition: 0.5s;
  animation-delay: ${(props) => props.index * 0.05}s !important;
  padding: ${(props) => (props.letter === " " ? "0.325rem" : null)};
`;
