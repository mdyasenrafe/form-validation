import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OwnText from "./Text/OwnText";

export const HeaderComponent = ({ routes }) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 16,
        paddingLeft: 8,
      }}
    >
      <OwnText preset="h5">{routes}</OwnText>
    </SafeAreaView>
  );
};
