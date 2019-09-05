import React from "react";
import styled from "styled-components";

const Course = props => {
  return (
    <Container>
      <Cover>
        <Image source={props.image} />
        <Logo source={props.logo} resizeMode="contain" />
        <Subtitle>{props.subtitle}</Subtitle>
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
  border-radius: 14px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  margin: 10px auto;
  background: white;
`;

const Cover = styled.View`
  height: 260px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
  justify-content: flex-end;
  overflow: hidden;
`;

const Image = styled.Image`
  ${"" /* make image underneath */}
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  height: 48px;
  width: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-top: 4px;
  width: 170px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Content = styled.View`
  height: 75px;
  padding-left: 62px;
  justify-content: center;
`;
const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  max-width: 225px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;
