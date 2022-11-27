import React from "react"
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo"; 

import {Container,Column, Title, TitleHighLight  } from './styles';

const Feed = () => {
    return (<> 
         <Header />
         <Container>
            <Column flex={3}>
               <Title>Feed</Title>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </Column>
            <Column flex={1}>
               <TitleHighLight>#Ranking da semana</TitleHighLight>
            <UserInfo percentual = {65} nome = "Pablo Henrique" image= "https://avatars.githubusercontent.com/u/45184516?v=4"/>
            <UserInfo percentual = {25} nome = "Pablo Henrique" image= "https://avatars.githubusercontent.com/u/45184516?v=4"/>
            <UserInfo percentual = {10} nome = "Pablo Henrique" image= "https://avatars.githubusercontent.com/u/45184516?v=4"/>
            <UserInfo percentual = {91} nome = "Pablo Henrique" image= "https://avatars.githubusercontent.com/u/45184516?v=4"/>
            <UserInfo percentual = {35} nome = "Pablo Henrique" image= "https://avatars.githubusercontent.com/u/45184516?v=4"/>
            <UserInfo percentual = {79} nome = "Pablo Henrique" image= "https://avatars.githubusercontent.com/u/45184516?v=4"/>


            </Column>
            

         </Container>
       
       </>)
}

export default Feed;