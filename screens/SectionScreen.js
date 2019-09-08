import React from "react";
import styled from "styled-components";
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class SectionScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        <StatusBar hidden />

        <Cover>
          <Image source={section.image}></Image>
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{
            position: "absolute",
            top: 20,
            right: 20
          }}
        >
          <CloseView
            title="Close"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Ionicons
              name="ios-close"
              size={36}
              style={{ marginTop: -2 }}
              color="#4775f2"
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  width: 170px;
  font-weight: bold;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  max-width: 300px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
