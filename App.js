import react, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import Home from "./screen/Home/Home";
import Todolist from "./screen/Todolist/Todolist";
import CustomizeList from "./screen/CutomizeList/CustomizeList";

import Login from "./screen/Login/Login";
const Stack = createStackNavigator();
const AuthenStack = createStackNavigator();
const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Todolist"
        component={Todolist}
        options={({ route }) => {
          return {
            title: route.params.title,
            headerStyle: {
              backgroundColor: "mint",
            },
            headerTintColor: "purple",
          };
        }}
      />
      <Stack.Screen
        name="CustomizeList"
        component={CustomizeList}
        options={({ route }) => {
          return {
            title: route.params.title
              ? `Customize ${route.params.title}`
              : "Create you task list",
            headerStyle: {
              backgroundColor: "sean",
            },
            headerTintColor: "purple",
          };
        }}
      />
    </Stack.Navigator>
  );
};
const AuthScreens = () => {
  return (
    <AuthenStack.Navigator>
      <AuthenStack.Screen component={Login} name="Login" />
    </AuthenStack.Navigator>
  );
};
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <NavigationContainer>
      {isAuthenticated ? <Screens></Screens> : <AuthScreens></AuthScreens>}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    borderWidth: "3px",
    borderColor: "red",
  },
  innerText: {
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
  },
});
