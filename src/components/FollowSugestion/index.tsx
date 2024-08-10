import React from 'react';

import { Container, Avatar, Info, FollowButton } from './styles';

interface Props {
    name: string;
    nickName: string;
}

const FollowSugestion: React.FC<Props> = ({ name, nickName }) => {
    return (
        <Container>
            <div>
                <Avatar />
                <Info>
                    <strong>{name}</strong>
                    <span>{nickName}</span>
                </Info>
            </div>
            <FollowButton outlined>Seguir</FollowButton>
        </Container>
    );
};

export default FollowSugestion;
