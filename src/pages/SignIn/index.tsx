import {Image} from 'react-native'
import React from 'react';

import Input from '../../components/Input'
import Button from '../../components/Button'

import logoImg from '../../assets/logo.png';
import {Container, Title} from './styles'

const SignIn: React.FC = () => {
    return(
        <Container>
            <Image source={logoImg}/>
            
            <Title>Faça seu logon</Title>
            
            <Input />
            
            <Input />

            <Button onPress={() => {}}>Entrar</Button>
        </Container>
    )
}

export default SignIn;