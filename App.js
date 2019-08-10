import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import Card from "./components/Card";
import Logo from "./components/Logo";

export default function App(props) {
  return (
    <Container>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f3f5" }}>
        <ScrollView style={{ height: "100%" }}>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome back, </Title>
            <Name>Henry</Name>
            <Icon name="ios-notifications" size={32} color="#4775f2" />
          </TitleBar>
          <Logo image={require("./assets/logo-framerx.png")} text="FramerX" />
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            <Card
              image={require("./assets/background1.jpg")}
              title="Styled Components"
              logo={require("./assets/logo-react.png")}
              caption="React Native"
              subtitle="5 of 12"
            />
            <Card
              image={require("./assets/background2.jpg")}
              title="Framer X"
              logo={require("./assets/logo-framerx.png")}
              caption="Framer X"
              subtitle="6 of 12"
            />
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Icon = styled(Ionicons)`
  position: absolute;
  right: 25;
  top: 15;
`;
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 15px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
