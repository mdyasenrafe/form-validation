import { TextInput } from "react-native";
import React from "react";
const styles = require("../styles/style");

export function Input(props) {
  const {
    placeholder,
    autoCapitalize,
    keyboardType,
    style,
    multiline,
    onChangeText,
  } = props;
  return (
    <TextInput
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      style={[styles.input, style]}
      placeholder={placeholder}
      placeholderTextColor="black"
      multiline={multiline}
      onChangeText={onChangeText}
    />
  );
}
