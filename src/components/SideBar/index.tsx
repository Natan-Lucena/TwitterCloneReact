import React from 'react';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';
import List from '../List';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Search in Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <Body>
                <List
                    title="Talvez voce curta"
                    elements={[<h1>test</h1>, <h1>test</h1>, <h1>test</h1>]}
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
