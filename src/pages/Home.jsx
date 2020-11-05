import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { CustomButton } from "../components/utilities/CustomButton";
import { CustomTextInput } from "../components/utilities/CustomTextInput";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/img/landingIcon.png")} />
      </View>
      <CustomTextInput placeholder="Search" height={5} />
      <View style={styles.containerBtn}>
        <CustomButton
          backgroundColor="#AF2E1C"
          color="#ffffff"
          height={40}
          width={100}
          onPress={() => props.navigation.navigate("List")}
        >
          Search
        </CustomButton>
      </View>
    </View>
  );
}

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

export default Home;
