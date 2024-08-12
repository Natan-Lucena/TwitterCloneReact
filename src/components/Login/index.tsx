import React, { useState } from 'react';
import {
    Container,
    LoginWrapper,
    Logo,
    EmailInput,
    PasswordInput,
} from './styles';
import Button from '../Button';
import axios, { AxiosError } from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const executeLogin = async () => {
        try {
            if (!email || !password) {
                alert('Preencha todos os campos!');
                return;
            }
            const response = await axios.post(
                'http://localhost:3001/v1/signin',
                {
                    email,
                    password,
                }
            );
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            switch (axiosError.response?.status) {
                case 401:
                    alert('Senha ou email incorretos!');
                    break;
                case 400:
                    alert('Digite uma senha e email validos!');
                    break;
                case 500:
                    alert(
                        'Erro interno no servidor, tente novamente mais tarde!'
                    );
                    break;
            }
        }
    };

    return (
        <Container>
            <Logo />
            <LoginWrapper>
                <p>Digite seu email</p>
                <EmailInput
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Digite sua senha</p>
                <PasswordInput
                    placeholder="Digite sua senha"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={executeLogin}>Login</Button>
                <p>
                    Se não possui perfil, clique{' '}
                    <Link to="/register">AQUI</Link>
                </p>
            </LoginWrapper>
        </Container>
    );
};

export default Login;
