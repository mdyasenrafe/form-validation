import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Form from "./screen/Form";
import { NativeBaseProvider, extendTheme } from "native-base";

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsMeduim: require("./assets/fonts/Poppins-Medium.ttf"),
  });
  const newColorTheme = {
    brand: {
      800: "#ffffff",
    },
  };

  const theme = extendTheme({
    colors: newColorTheme,
  });
  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Form />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
