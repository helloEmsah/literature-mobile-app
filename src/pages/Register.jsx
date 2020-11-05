import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomButton } from "../components/utilities/CustomButton";
import { CustomTextInput } from "../components/utilities/CustomTextInput";

const Register = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <View>
        <CustomTextInput placeholder="Email" />
        <CustomTextInput placeholder="Password" />
        <CustomTextInput placeholder="Full Name" />
        <CustomTextInput placeholder="Gender" />
        <CustomTextInput placeholder="Phone" />
        <CustomTextInput placeholder="Address" />
        <CustomButton
          backgroundColor="#AF2E1C"
          color="#ffffff"
          height={50}
          width={280}
          style={{ marginLeft: 10 }}
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
    flex: 1,
    backgroundColor: "#161616",
    padding: 30,
  },
  header: {
    color: "#ffffff",
    fontSize: 36,
    marginLeft: 30,
    marginBottom: 15,
  },
});

export default Register;
