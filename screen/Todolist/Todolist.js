import { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import ToDoListItem from "../../components/ToDoListItem/ToDoListItem";
const renderAddlistIcon = (addItem) => {
  return (
    <TouchableOpacity
      onPress={() => {
        addItem({ text: "", isChecked: false, isNewTask: true });
      }}
    >
      <Text style={{ fontSize: 24, padding: 10 }}>+</Text>
    </TouchableOpacity>
  );
};
export default function Todolist({ navigation }) {
  const [todoItems, setTodoItems] = useState([]);
  const addItemTolists = (item) => {
    todoItems.push(item);
    setTodoItems([...todoItems]);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddlistIcon(addItemTolists),
    });
  });
  const removeTodoListItem = (index) => {
    todoItems.splice(index, 1);
    setTodoItems([...todoItems]);
  };
  const updateItem = (index, item) => {
    todoItems[index] = item;
    setTodoItems([...todoItems]);
  };
  return (
    <View>
      <FlatList
        data={todoItems}
        renderItem={({ item: { text, isChecked, isNewTask }, index }) => {
          return (
            <ToDoListItem
              text={text}
              isChecked={isChecked}
              isNewTask={isNewTask}
              onChecked={() => {
                const toDoItem = todoItems[index];
                toDoItem.isChecked = !isChecked;
                updateItem(index, toDoItem);
              }}
              onChangeText={(newUpdatedText) => {
                const toDoItem = todoItems[index];
                toDoItem.text = newUpdatedText;
                updateItem(index, toDoItem);
              }}
              onDelete={() => {
                removeTodoListItem(index);
              }}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
