import React from 'react';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';
import List from '../List';
import FollowSugestion from '../FollowSugestion';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search in Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <List
                    title="Talvez você curta"
                    elements={[
                        <FollowSugestion
                            name="ManoDeyvin"
                            nickName="@manoDeyvin"
                        />,
                        <FollowSugestion
                            name="Renato Cariani"
                            nickName="@homemDoPó"
                        />,
                        <FollowSugestion
                            name="Normando Lucena"
                            nickName="@superHero"
                        />,
                    ]}
                />
                <List
                    title="O que está acontecendo"
                    elements={[<h1>test</h1>, <h1>test</h1>, <h1>test</h1>]}
                />
            </Body>
        </Container>
    );
};

export default SideBar;
