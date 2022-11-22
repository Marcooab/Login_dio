import React from "react"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"
import { Container, Column, Title, TitleHighLight} from "./styles"

import UserInfo from "../../components/UserInfo/UserInfo"

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3} >
              <Title>Feed</Title>
              <Card />
              <Card />
              <Card />
            </Column>
            <Column flex={1}>
              <TitleHighLight># RANKING 5 TOPS DA SEMANA </TitleHighLight>
              <UserInfo percentual={35} name="Marco Aurelio" image="https://avatars.githubusercontent.com/u/102860659?v=4" />
              <UserInfo percentual={80} name="Marco Aurelio" image="https://avatars.githubusercontent.com/u/102860659?v=4" />
              <UserInfo percentual={20} name="Marco Aurelio" image="https://avatars.githubusercontent.com/u/102860659?v=4" />
              <UserInfo percentual={50} name="Marco Aurelio" image="https://avatars.githubusercontent.com/u/102860659?v=4" />
              <UserInfo percentual={90} name="Marco Aurelio" image="https://avatars.githubusercontent.com/u/102860659?v=4" />
            </Column> 
        </Container>
    </>
  )
}

export default Feed