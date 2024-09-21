import React, { useEffect, useState } from 'react';
import { Container, Tab, Tweets } from './styles';
import Tweet from '../Tweet';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ITweetProps {
    User: {
        name: string;
        username: string;
    };
    date: string;
    description: string;
    Likes: any[];
    image?: string;
}

const Feed: React.FC = () => {
    const [tweets, setTweets] = useState<ITweetProps[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar logado para acessar essa página!');
            navigate('/login');
            return;
        }
        const fetchTweets = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3001/v1/tweets/scrolled',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setTweets(response.data);
            } catch (e) {
                alert('Erro ao buscar tweets');
                navigate('/login');
                return;
            }
        };
        fetchTweets();
    }, [navigate]);
    return (
        <Container>
            <Tab>Tweets</Tab>
            <Tweets>
                {tweets.map((tweet, index) => (
                    <Tweet
                        key={index}
                        name={tweet.User.name}
                        user={tweet.User.username}
                        date={'17 jun 2021'}
                        description={tweet.description}
                        image={tweet.image}
                        likes={tweet.Likes.length}
                    />
                ))}
            </Tweets>
        </Container>
    );
};

export default Feed;
