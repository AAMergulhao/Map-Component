import React from "react";
import styled from "styled-components";
import Map from "./Map";

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;
const Container =  styled.div`

`;

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
        }
    }
    render() {
        return (
            <AppWrapper>
                <Container>
                    <Map />
                </Container>
            </AppWrapper>
        );
    }

}