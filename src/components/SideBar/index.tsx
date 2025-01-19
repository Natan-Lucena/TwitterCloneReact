import React, { useEffect } from 'react';
import StickyBox from 'react-sticky-box';

import News from '../News';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface User {
    name: string;
    username: string;
}
interface INews {
    description: string;
    link: string;
}

const SideBar: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUser] = React.useState<User[]>();
    const [news, setNews] = React.useState<INews[]>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        const fetchNews = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3001/v1/news',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setNews(response.data.news);
            } catch (e) {
                navigate('/login');
            }
        };
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3001/v1/users/not-followed',
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
        fetchNews();
    }, [navigate]);

    // Dividir as notícias em subarrays de no máximo 3 itens
    const groupedNews = news
        ? news.reduce<INews[][]>((result, current, index) => {
              const groupIndex = Math.floor(index / 3);
              if (!result[groupIndex]) {
                  result[groupIndex] = [];
              }
              result[groupIndex].push(current);
              return result;
          }, [])
        : [];

    // Limitar o número de listas a no máximo 3
    const limitedLists = groupedNews.slice(0, 3);

    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search in Twitter" />
                <SearchIcon />
            </SearchWrapper>
            <StickyBox>
                <Body>
                    <List
                        title="Talvez você curta"
                        elements={
                            users?.map((user) => {
                                return (
                                    <FollowSugestion
                                        name={user.name}
                                        nickName={user.username}
                                    />
                                );
                            }) ?? []
                        }
                    />
                    {limitedLists.map((newsGroup, index) => (
                        <List
                            key={index}
                            title={
                                index === 0
                                    ? 'Assuntos do momento no mundo'
                                    : index === 1
                                    ? 'Assuntos do momento no Brasil'
                                    : index === 2
                                    ? 'Assuntos do momento na sua região'
                                    : 'Noticias'
                            }
                            elements={newsGroup.map((n) => (
                                <News
                                    key={n.link}
                                    title={
                                        index === 0
                                            ? 'Assuntos do momento no mundo'
                                            : index === 1
                                            ? 'Assuntos do momento no Brasil'
                                            : index === 2
                                            ? 'Assuntos do momento na sua região'
                                            : 'Noticias'
                                    }
                                    description={n.description}
                                    link={n.link}
                                />
                            ))}
                        />
                    ))}
                </Body>
            </StickyBox>
        </Container>
    );
};

export default SideBar;
