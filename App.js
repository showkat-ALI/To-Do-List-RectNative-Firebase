import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text } from "react-native";
import Home from "./screen/Home/Home";
import Todolist from "./screen/Todolist/Todolist";
import CustomizeList from "./screen/CutomizeList/CustomizeList";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
