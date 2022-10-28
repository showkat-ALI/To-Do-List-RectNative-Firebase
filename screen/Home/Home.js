import { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import NoteList from "./../../components/NoteList/NoteList";
const renderAddlistIcon = (navigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("CustomizeList", {})}>
      <Text style={{ fontSize: 24, padding: 10 }}>+</Text>
    </TouchableOpacity>
  );
};
export default function Home({ navigation }) {
  const [lists, setLists] = useState([{ title: "school" }]);

  const addItemTolists = (item) => {
    lists.push(item);
    setLists([...lists]);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddlistIcon(navigation),
    });
  });
  const removeTodoListItem = (index) => {
    lists.splice(index, 1);
    setLists([...lists]);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({ item: { title }, index }) => {
          return (
            <NoteList
              onDelete={() => removeTodoListItem(index)}
              title={title}
              navigation={navigation}
              onPress={() => {
                navigation.navigate("Todolist", { title });
              }}
              onOptions={() => {
                navigation.navigate("CustomizeList", { title });
              }}
            ></NoteList>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  innerText: {
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
  },
});
