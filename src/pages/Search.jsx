import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CustomButton } from "../components/utilities/CustomButton";
import { CustomTextInput } from "../components/utilities/CustomTextInput";

import { List } from "../components/List";

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Search</Text>
      <ScrollView>
        <List />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#161616",
    padding: 30,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerBtn: {
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default Search;
