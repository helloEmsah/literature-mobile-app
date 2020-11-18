import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomButton } from "../components/utilities/CustomButton";
import { CustomTextInput } from "../components/utilities/CustomTextInput";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View>
        <CustomTextInput placeholder="Email" />
        <CustomTextInput secureTextEntry={true} placeholder="Password" />
        <CustomButton
          backgroundColor="#af2e1c"
          color="#ffffff"
          height={50}
          width={280}
          style={{ marginLeft: 10 }}
          onPress={() => props.navigation.navigate("Home")}
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
    marginLeft: 10,
    marginBottom: 15,
  },
});

export default Login;
