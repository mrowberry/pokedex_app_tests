import React from "react";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import * as themeStyles from '../theme/theme'
import ContextThemeProvider from "./ContextThemeProvider";
import { store } from "../store/store";
import { Provider } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background.primary};
  }
`

export const GlobalProvider: React.FC = ({children}) => {
    return (
        <Provider store={store}>
            <ContextThemeProvider>
                {(theme) => {
                    return (
                        <ThemeProvider theme={themeStyles[theme]}>
                            <GlobalStyle />
                            {children}
                        </ThemeProvider>
                    )
                }}
            </ContextThemeProvider>
        </Provider>
    )
}

export default GlobalProvider;