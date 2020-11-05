import React from "react";
import { Input } from "react-native-elements";

export const CustomTextInput = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      {...props}
      inputContainerStyle={{
        borderRadius: 5,
        borderColor: "#ffffff",
        borderWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: "#444444",
        borderBottomColor: "white",
        padding: 10,
        paddingVertical: 0,
        width: "100%",
      }}
      inputStyle={{
        color: "#ffffff",
      }}
      errorStyle={{
        color: "#ffffff",
      }}
    />
  );
};
