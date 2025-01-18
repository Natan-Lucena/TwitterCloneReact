import React, { useState } from 'react';

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
    Dot,
    LikeIcon,
} from './styles';
import { FavoriteIcon } from '../MenuBar/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface ITweetProps {
    name: string;
    user: string;
    date: string;
    description: string;
    tweetId: string;
    likes: number;
    isLiked: boolean;
    image?: string;
}

const Tweet: React.FC<ITweetProps> = ({
    name,
    user,
    date,
    description,
    image,
    likes,
    tweetId,
    isLiked,
}: ITweetProps) => {
    const [liked, setLiked] = useState(isLiked);
    const [likeCount, setLikeCount] = useState(likes);
    const navigate = useNavigate();

    const handleLikeClick = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        setLiked(!liked);
        setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));

        const likeTweet = async () => {
            try {
                await axios.post(
                    `http://localhost:3001/v1/tweets/${tweetId}/like`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } catch (error) {
                console.error('Erro ao enviar like:', error);
            }
        };

        likeTweet();
    };

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
                            {liked ? (
                                <LikeIcon onClick={handleLikeClick} />
                            ) : (
                                <FavoriteIcon onClick={handleLikeClick} />
                            )}
                            {likeCount}
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
