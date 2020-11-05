import React from "react";
import { Dimensions } from "react-native";
import { Button } from "react-native-elements";

const width = Dimensions.get("window").width;

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
