import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function NoteList({ title, onPress, onDelete, onOptions }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 6,
        borderWidth: 1,
        marginHorizontal: 30,
        marginVertical: 30,
        backgroundColor: "green",
        height: 100,
      }}
      onPress={onPress}
    >
      <View>
        <Text style={{ color: "white" }}>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity>
          <Ionicons
            onPress={onOptions}
            name="settings-outline"
            size={25}
            color="white"
          ></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            onPress={onDelete}
            name={"trash-outline"}
            size={25}
            color="white"
          ></Ionicons>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
