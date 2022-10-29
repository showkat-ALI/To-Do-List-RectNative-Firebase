import { CommonActions } from "@react-navigation/native";
import { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

const CustomizeList = ({ navigation, route }) => {
  const [title, setEditTitle] = useState(route.params.title || "");
  const [sureValid, setSureValid] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5,
      }}
    >
      <View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text>Edit you Task List</Text>
          {!sureValid && (
            <Text style={{ color: "red", marginLeft: "30px" }}>
              Please populate the list name
            </Text>
          )}
        </View>
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={title}
          onChangeText={(text) => {
            setEditTitle(text);
            setSureValid(true);
          }}
          placeholder={"Put your new task list name here"}
          onSubmitEditing={() => {}}
          maxLength={30}
          style={{
            outline: "none",
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: "green",
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
            borderStyle: "solid",
            height: 60,
            width: 250,
            padding: 10,
            backgroundColor: "black",
          }}
          onPress={() => {
            if (title.length > 1) {
              route.params.saveChanges({ title });
              navigation.dispatch(CommonActions.goBack());
            } else {
              setSureValid(false);
            }
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Save Your New Task List Title
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomizeList;

const styles = StyleSheet.create({});
