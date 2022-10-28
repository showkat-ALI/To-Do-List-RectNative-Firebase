import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";

export default function EditableTextField({
  text,
  onChangeText,
  isChecked,
  isNewTask,
}) {
  const [editEnable, setEditEnable] = useState(isNewTask);

  return (
    <TouchableOpacity onPress={() => !isChecked && setEditEnable(true)}>
      {editEnable ? (
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={text}
          onChangeText={onChangeText}
          placeholder={"Put your new task here"}
          onSubmitEditing={() => {}}
          maxLength={30}
          style={{
            outline: "none",
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "green",
          }}
          onBlur={() => {
            setEditEnable(false);
          }}
        />
      ) : (
        <Text
          style={{
            color: isChecked ? "gray" : "black",
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
}
