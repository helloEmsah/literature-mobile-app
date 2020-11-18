import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { CustomButton } from "../components/utilities/CustomButton";

const Landing = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ top: 0, width: 180, height: 180 }}
        source={require("../../assets/img/bg1.png")}
      />
      <Image source={require("../../assets/img/landingIcon.png")} />

      <Text style={styles.header}>source of intelligence</Text>
      <Text style={styles.subHeader}>
        Sign-up and receive unlimited accesss to all of your literature - share
        your literature.
      </Text>
      <View style={styles.containerBtn}>
        <CustomButton
          backgroundColor="#AF2E1C"
          color="#ffffff"
          height={40}
          width={250}
          style={{ marginBottom: 5 }}
          onPress={() => props.navigation.navigate("Register")}
        >
          Sign Up
        </CustomButton>

        <CustomButton
          backgroundColor="#ffffff"
          color="#000000"
          height={40}
          width={250}
          style={{ marginTop: 5 }}
          onPress={() => props.navigation.navigate("Login")}
        >
          Sign In
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#161616",
    padding: 30,
  },
  header: {
    color: "#ffffff",

    fontSize: 50,
    fontStyle: "normal",
    lineHeight: 55,
    marginBottom: 10,
  },
  subHeader: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 25,
  },
  containerBtn: {
    justifyContent: "center",
    flexDirection: "column",
  },
});

export default Landing;
