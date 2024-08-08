import React from 'react';

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

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar />
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar Perfil</EditButton>
                <h1>Natan Lucena</h1>
                <h2>@natanlucena</h2>
                <p>
                    Full stack developer at{' '}
                    <a href="https://www.linkedin.com/in/natan-lucena/">
                        @natanlucena
                    </a>
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
