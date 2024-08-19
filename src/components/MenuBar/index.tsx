import React, { useEffect } from 'react';
import axios from 'axios';

import Button from '../Button';

import {
    Container,
    TopSide,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    BotSide,
    Avatar,
    ProfileData,
    ExitIcon,
} from './styles';
import { useNavigate } from 'react-router-dom';

interface User {
    name: string;
    email: string;
}

const MenuBar: React.FC = () => {
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
                alert('Erro ao buscar dados do usuário');
                navigate('/login');
            }
        };
        fetchUser();
    }, [navigate]);

    return (
        <Container>
            <TopSide>
                <Logo />
                <MenuButton>
                    <HomeIcon />
                    <span>Pagina inicial</span>
                </MenuButton>
                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>
                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>
                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>
                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>
                <Button>
                    <span>Tweetar</span>
                </Button>
            </TopSide>

            <BotSide>
                <Avatar />
                <ProfileData>
                    <strong>{user?.name}</strong>
                    <span>{user?.email}</span>
                </ProfileData>
                <ExitIcon />
            </BotSide>
        </Container>
    );
};

export default MenuBar;
