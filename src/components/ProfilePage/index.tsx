import React, { useEffect } from 'react';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton,
} from './styles';
import Feed from '../Feed/Index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface User {
    description: string;
    username: string;
    name: string;
}

const ProfilePage: React.FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState<User>();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar logado para acessar essa página!');
            navigate('/login');
            return;
        }
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3001/v1/user/me',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setUser(response.data);
            } catch (e) {
                navigate('/login');
            }
        };
        fetchUser();
    }, [navigate]);
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>
                <h1>{user?.name}</h1>
                <h2>{user?.username}</h2>
                <p>
                    {user?.description ? user.description : 'Descrição vazia'}
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        Quixadá, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 4 de setembro de 2004
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>672 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
            <Feed />
        </Container>
    );
};

export default ProfilePage;
