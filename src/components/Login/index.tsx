import React from 'react';

import {
    Container,
    LoginWrapper,
    Logo,
    EmailInput,
    PasswordInput,
} from './styles';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const navigateToFeed = () => {
        navigate('/');
    };

    return (
        <Container>
            <Logo />
            <LoginWrapper>
                <p>Digite seu email</p>
                <EmailInput placeholder="Digite seu email" />
                <p>Digite sua senha</p>
                <PasswordInput placeholder="Digite sua senha" />
                <Button onClick={navigateToFeed}> Login</Button>
                <p>Se não possui perfil, clique AQUI</p>
            </LoginWrapper>
        </Container>
    );
};

export default Login;
