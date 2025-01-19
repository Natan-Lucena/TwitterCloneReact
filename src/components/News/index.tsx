import React from 'react';

import { Container } from './styles';

interface NewsProps {
    link: string;
    description: string;
}

const News: React.FC<NewsProps> = (props: NewsProps) => {
    return (
        <Container onClick={() => window.open(props.link, '_blank')}>
            <span>Assuntos do momento no Brasil</span>
            <strong>{props.description}</strong>
        </Container>
    );
};

export default News;
