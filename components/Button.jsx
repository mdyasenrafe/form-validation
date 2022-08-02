import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "../theme/Color";
import OwnText from "./Text/OwnText";

export default function Button(props) {
  const { title, style: customStyle, onPress, color, disable } = props;
  return (
    <TouchableOpacity
      style={[styles.button, customStyle]}
      onPress={onPress}
      disabled={disable}
    >
      <OwnText style={{ color: color || Colors.white }}>{title}</OwnText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    width: "95%",
    alignItems: "center",
    alignSelf: "center",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF002B",
    marginTop: 16,
  },
});
