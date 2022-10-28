import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import NoteList from "./../../components/NoteList/NoteList";

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ title: "school" }, { title: "Home" }, { title: "office" }]}
        renderItem={({ item: { title }, index }) => {
          return <NoteList title={title}></NoteList>;
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
