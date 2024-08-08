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

const Tweet: React.FC = () => {
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
                        <strong>Lucas Montano</strong>
                        <span>@lucasmontano_</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>
                    <Description>Foguete não tem ré 🚀</Description>
                    <ImageContent />
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
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    );
};

export default Tweet;
