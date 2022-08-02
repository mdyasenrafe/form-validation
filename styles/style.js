"use strict";
import { StyleSheet } from "react-native";
import { Colors } from "../theme/Color";
import { Typrography } from "../theme/Typrography";

module.exports = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.borderColor,
    height: 48,
    fontFamily: Typrography.regular,
    backgroundColor: "#efefef",
    borderRadius: 8,
    padding: 10,
    color: Colors.black,
    width: "100%",
  },
});
