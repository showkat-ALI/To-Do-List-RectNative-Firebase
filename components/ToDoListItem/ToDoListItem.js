import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox";
import EditableTextField from "../EditableTextField/EditableTextField";

export default function ToDoListItem({
  text,
  isChecked,
  onChecked,
  onChangeText,
  onDelete,
  isNewTask,
}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CheckBox isChecked={isChecked} onChecked={onChecked} />
        <EditableTextField
          style={{ flex: 1 }}
          text={text}
          isChecked={isChecked}
          onChangeText={onChangeText}
          isNewTask={isNewTask}
        />
      </View>
      <View>
        <Button onPress={onDelete} title={"X"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
