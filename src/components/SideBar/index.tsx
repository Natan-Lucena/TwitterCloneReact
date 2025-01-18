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

const SideBar: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUser] = React.useState<User[]>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
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
    }, [navigate]);

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
                    <List
                        title="O que está acontecendo"
                        elements={[<News />, <News />, <News />]}
                    />
                    <List
                        title="O que está acontecendo"
                        elements={[<News />, <News />, <News />]}
                    />
                    <List
                        title="O que está acontecendo"
                        elements={[<News />, <News />, <News />]}
                    />
                </Body>
            </StickyBox>
        </Container>
    );
};

export default SideBar;
