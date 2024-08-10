import React from 'react';
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

const SideBar: React.FC = () => {
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
