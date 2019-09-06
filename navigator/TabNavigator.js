import React from "react";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Section: SectionScreen
});

const CoursesStack = createStackNavigator({
  Courses: SectionScreen
});

const ProjectsStack = createStackNavigator({
  Projects: SectionScreen
});

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack
});

export default TabNavigator;
