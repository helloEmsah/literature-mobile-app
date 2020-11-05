import React from "react";
import { Input } from "react-native-elements";
import { View, Text, Button } from "react-native";

export const CustomTextInput = (props) => {
  return (
    <Input
      placeholder={props.placeholder}
      {...props}
      inputContainerStyle={{
        borderRadius: 5,
        borderColor: "#ffffff",
        borderWidth: 2,
        borderBottomWidth: 2,
        backgroundColor: "rgba(210, 210, 210, 0.25)",
        borderBottomColor: "white",
        padding: 10,
        paddingVertical: 5,
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

export const CustomButton = (props) => {
  return (
    <Button
      {...props}
      title={props.children}
      titleStyle={{
        fontSize: 16,

        color: props.color,
      }}
      buttonStyle={{
        height: props.height,
        backgroundColor: props.backgroundColor,
        borderRadius: 5,
        width: props.width,
        ...props.style,
      }}
    />
  );
};
