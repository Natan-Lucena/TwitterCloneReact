import styled from 'styled-components';

import { RocketIcon } from '../../styles/Icons';

export const Container = styled.div`
    background: var(--primary);
    display: flex;
    flex-direction: column; /* Alinha os itens em uma coluna */
    align-items: center; /* Centraliza horizontalmente */
    justify-content: center; /* Centraliza verticalmente */
`;

export const LoginWrapper = styled.div`
    border-radius: 25px;
    background: var(--twitter);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 30vw;
    padding: 20px;

    > p {
        color: var(--outline);
        font-weight: bold;
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    > button {
        align-self: center;
        margin-top: 10px;
        background: var(--outline);
    }
    @media (max-width: 700px) {
        width: 90vw;
    }
`;

export const Logo = styled(RocketIcon)`
    width: 30vw;
    height: 20vh; /* Diminuído para deixar espaço para o login */
    margin-bottom: 20px; /* Espaçamento entre o logo e os inputs */
    > path {
        fill: var(--twitter);
    }
`;

export const EmailInput = styled.input`
    background: var(--gray);
    color: var(--white);
    border-radius: 25px;
    width: 75%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;

    ::placeholder {
        color: black;
    }
`;

export const PasswordInput = styled.input`
    background: var(--gray);
    color: var(--white);
    border-radius: 25px;
    width: 75%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;

    ::placeholder {
        color: black;
    }
`;
