import logo from "./logo-dio.png"
import React from "react"
import { IHeader } from "./types"

import Button from "../Button/Button"
import { 
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from "./styles"

const Header = ({autenticado}: IHeader) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder="Buscar..." />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/102860659?v=4" />
                    ) : (
                        <>
                        <MenuRight href="$">Home</MenuRight>
                        <Button title="Entrar"></Button>
                        <Button title="Cadastrar"></Button>
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Header