import React from "react";
import styled from "styled-components";

const Course = props => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Logo source={props.logo} />
        <Subtitle text={props.subtitle} />
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Author>{props.author}</Author>
        <Caption>{props.caption}</Caption>
        <Avatar source={props.avatar} />
      </Content>
    </Container>
  );
};

export default Course;

const Container = styled.View`
  width: 335px;
  height: 335px;
`;

const Cover = styled.View`
  height: 260px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  height: 48px;
  width: 48px;
`;
const Subtitle = styled.Text``;
const Title = styled.Text``;
const Content = styled.View``;
const Author = styled.Text``;
const Caption = styled.Text``;

const Avatar = styled.Image`
  height: 32px;
  width: 32px;
`;
