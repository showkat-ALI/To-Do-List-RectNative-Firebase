import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CheckBox({ isChecked, onChecked, ...props }) {
  return (
    <TouchableOpacity style={styles.checkbox} onPress={onChecked}>
      <Text>{isChecked ? "✓" : ""}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    margin: 5,
    backgroundColor: "#fff0",
    borderWidth: 1,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
