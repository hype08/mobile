import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
const MenuItem = props => {
  return (
    <Container>
      <IconView>
        <Icon name={props.icon} size={24} color="#546bfb" />
      </IconView>
      <Content>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </Content>
    </Container>
  );
};

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const Icon = styled(Ionicons)``;

const IconView = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 24px;
`;

const Text = styled.Text`
  color: #3c4560;
  font-weight: 600;
  opacity: 0.6;
`;

const Content = styled.View`
  padding-left: 20px;
`;
