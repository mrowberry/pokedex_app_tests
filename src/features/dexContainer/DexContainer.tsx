import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import ParamsChecker from "../paramChecker/ParamChecker";

const Container = styled.div`
    background-color: ${props => props.theme.colors.background.primary};
`;

const ScrollingDex = styled.div`
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
`;

const DexContainer: React.FC = () => {
    return (
        <Container>
            <Routes>
                <Route path='/:category/:name' element={
                    <ParamsChecker />
                }/>
                <Route path='/:category' element={
                    <ScrollingDex>
                        <ParamsChecker />
                    </ScrollingDex>
                }/>

                <Route path="/" element= {
                    <Navigate to="/pokemon" />
                }/>
            </Routes>
        </Container>
    )
}

export default DexContainer;