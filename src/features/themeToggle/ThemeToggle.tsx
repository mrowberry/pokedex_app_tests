import React from "react";
import {useContext} from "react";
import {ThemeToggleContext} from "../../providers/ContextThemeProvider";
import {animated, config, useSpring} from "react-spring";
import styled from "styled-components";
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs";

const ToggleContainer = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 10px;
  border: 1px solid black;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const SpringTab = styled(animated.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  pointer-events: none;
`;

const ContainerFiller = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  > img {
      user-select: none
  }
`;

const ThemeToggle: React.FC = () => {
    const themeContext = useContext(ThemeToggleContext);

    const styles = useSpring({
        config: config.gentle,
        translateY: (themeContext.currentTheme === "light" ? '0%' : '-50%')
    })


    return (
        <ToggleContainer onClick={() => {themeContext.toggleTheme()}}>
            <SpringTab style={styles}>
                <ContainerFiller>
                    {/*<BsFillSunFill size={'60px'} fill={'#000'}/>*/}
                    <img src={'https://cdn2.bulbagarden.net/upload/c/cb/Spr_5b_325.png'} alt='spoink'/>
                </ContainerFiller>

                <ContainerFiller>
                    {/*<BsFillMoonFill size={'60px'} fill={'#000'}/>*/}
                    <img src={'https://cdn2.bulbagarden.net/upload/0/0f/Spr_5b_325_s.png'} alt='spoink shiny'/>
                </ContainerFiller>
            </SpringTab>
        </ToggleContainer>
    )
}

export default ThemeToggle