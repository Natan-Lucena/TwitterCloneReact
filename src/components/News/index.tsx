import React from 'react';

import { Container } from './styles';

interface NewsProps {
    link: string;
    description: string;
    title: string;
}

const News: React.FC<NewsProps> = (props: NewsProps) => {
    return (
        <Container onClick={() => window.open(props.link, '_blank')}>
            <span>{props.title}</span>
            <strong>{props.description}</strong>
        </Container>
    );
};

export default News;
