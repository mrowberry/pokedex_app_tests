import './App.css';
import React from "react";
import Menu from './features/menu/Menu'
import DexContainer from "./features/dexContainer/DexContainer";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalProvider from "./providers/GlobalProvider";
import ThemeToggle from "./features/themeToggle/ThemeToggle";

const NavContainer = styled.div`
  position: sticky;
  z-index: 5;
  top: 0;
  background-color: ${props => props.theme.colors.background.secondary};
  padding: 10px 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: '. center right';
  align-items: center;
  
`;

const Header = styled.div`
  grid-area: center
`;

const ToggleContainer = styled.div`
  grid-area: right;
  margin: 0 33% 0 66%;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.colors.foreground.onBackground}
`;

const App: React.FC = () => {
  return (
      <GlobalProvider>
          <Router>
              <div className="App">
                  <NavContainer>
                      <Header>
                          <Title >Pokédex</Title>
                          <Menu />
                      </Header>

                      <ToggleContainer>
                          <ThemeToggle/>
                      </ToggleContainer>
                  </NavContainer>
                  <DexContainer />
              </div>
          </Router>
      </GlobalProvider>
  );
}

export default App;
