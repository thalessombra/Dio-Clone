import React from 'react'
import {FiThumbsUp} from 'react-icons/fi';

import { CardContainer,Content, HasInfo,PostInfo, ImageBackground, UserInfo, UserPicture  } from './styles'
const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://hermes.digitalinnovation.one/assets/diome/logo.png'/>

           
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/45184516?v=4'/>
                <div>
                    <h4>Pablo Henrique</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de HTML e CSS</h4>
                <p>Projeto feito com o curso de html e css no bootcamp da dio...<strong>Saiba Mais</strong> </p>
            </PostInfo>
            <HasInfo>
                <h4>
                    #HTML #CSS #JavaScript
                </h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer> )
}

export {Card}