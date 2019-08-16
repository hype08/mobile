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

const Container = styled.View``;

const Icon = styled(Ionicons)``;

const IconView = styled.View``;

const Title = styled.Text``;

const Text = styled.Text``;

const Content = styled.View``;
