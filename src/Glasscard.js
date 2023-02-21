import React from 'react';
import cartoon from './images/cartoon.png';
import styled from 'styled-components';
import {useSpring, animated, config} from 'react-spring';

const StyledDiv = styled(animated.div)` 
    display: inline-block;
    padding: 3em;
    background: #C7D2FE66;
    color: #fff;
    border-radius: 10px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
`;

const StyledImg = styled.img`
    width: 200px;
    height: 200px;
    border: 2px solid #fff;
    border-radius: 50%;
    object-fit: cover;
`;

const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
`;

const StyledH3 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.15;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 10, (x - window.innerWidth / 2) / 10, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Glasscard() {
    const [props, set] = useSpring(() => ({xys: [0, 0, 1], config: config.default}))    
  return (
    <StyledDiv
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}
    >
        <StyledImg src={cartoon} alt='Profile'/>
        <StyledH1>Deepa Jha</StyledH1>
        <StyledH3>Software Developer, Designer <br/> and Full Stack Developer</StyledH3>
    </StyledDiv>
  );
}
