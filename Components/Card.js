import React from 'react'
import styled from 'styled-components';

const Card = props => {
    return (
        <Container>
            <Cover>
                <Image source={props.image} />
                <Title>{props.title}</Title>
            </Cover>
            <Content>
                <Logo source={props.logo}/>
                <Wrapper>
                    <Caption>{props.caption}</Caption>
                    <Subtitle>{props.subtitle}</Subtitle>
                </Wrapper>
            </Content>
        </Container>
    )
}

const Content = styled.View`
    padding: 20px;
    flex-direction: row;
    height: 80px;
    align-items: center;
`

const Wrapper = styled.View`
    margin-left: 15px;
`

const Caption = styled.Text`
    color: #3c4560;
    font-size: 20px;
    font-weight: 600;
`

const Subtitle = styled.Text`
    color: #b8bece;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    margin-top: 4px;
`

const Logo = styled.Image`
    height: 44px;
    width: 44px;
`

const Container = styled.View`
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 14px;
    height: 280px;
    width:  315px;
    background: white;
    box-shadow: 0 5px 15px rgba(0,0,0, 0.15);
`
const Cover = styled.View`
    width: 100%;
    height: 200px;
    overflow: hidden;   
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
`

const Image = styled.Image`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 24px;
    margin-top: 20px;
    margin-left: 20px;
    max-width: 170px;
`

export default Card
