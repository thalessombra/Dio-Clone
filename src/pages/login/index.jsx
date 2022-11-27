import {MdLock, MdEmail} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import {Column,Container, CreateText, ForgetText, Row, subTitleLogin, Title, TitleLogin, Wrapper} from './styles';

const Login = () => {
   const navigate = useNavigate();
   const handleClickSignIn = () => {
      navigate('/feed')
   }
    return (<> 
         <Header />
         <Container>
            <Column>
             <Title>
                 
                 A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas.
             </Title>

             
            
            </Column>
            <Column>
            <Wrapper>
               <TitleLogin>Faça seu cadastro</TitleLogin>
               <subTitleLogin>Faça seu login e make the change</subTitleLogin>
               <form>
               <Input placeholder="E-mail" leftIcon={<MdEmail/>}/>
               <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
               <Button tittle="Entrar" variant="secondary" onClick={handleClickSignIn}/>

               </form>
               <Row>
                  <ForgetText>Esqueci minha senha</ForgetText>
                  <CreateText>Criar conta</CreateText>
               </Row>
            </Wrapper>
               
                
            </Column>
         </Container>
       
       
       </>  )
}

export  default Login;