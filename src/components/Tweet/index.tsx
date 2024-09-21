import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    Rocket,
    RetweetIcon,
    LikeIcon,
    Dot,
} from './styles';

interface ITweetProps {
    name: string;
    user: string;
    date: string;
    description: string;
    likes: number;
    image?: string;
}

const Tweet: React.FC<ITweetProps> = ({
    name,
    user,
    date,
    description,
    image,
    likes,
}: ITweetProps) => {
    return (
        <Container>
            <Retweeted>
                <Rocket />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar />
                <Content>
                    <Header>
                        <strong>{name}</strong>
                        <span>{user}</span>
                        <Dot />
                        <time>{date}</time>
                    </Header>
                    <Description>{description}</Description>
                    {image && <ImageContent src={image} />}
                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            18
                        </Status>
                        <Status>
                            <LikeIcon />
                            {likes}
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
