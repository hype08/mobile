import React from "react";
import styled from "styled-components";
import { Button } from "react-native";
class SectionScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Section Screen</Text>
        <Button
          title="Close"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        ></Button>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Text = styled.Text``;
