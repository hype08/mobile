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
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                logo={card.logo}
                caption={card.caption}
                subtitle={card.subtitle}
              />
            ))}
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

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  }
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png")
  }
];
