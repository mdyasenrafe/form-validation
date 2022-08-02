import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native-web";
import { Preset } from "./Text.preset";

export default function OwnText({ children, style = "default", preset }) {
  const styles = StyleSheet.compose(Preset[preset], style);
  return <Text style={[styles]}>{children}</Text>;
}
