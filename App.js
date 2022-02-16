import AppLoading from "expo-app-loading";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { useFonts } from "expo-font";
import { Themes } from "./assets/Themes";
import TopNavBar from "./components/TopNavBar";
import BotNavBar from "./components/BotNavBar";
import Content from "./components/Content";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */
  //   fontFamily: 'Sydney', 'Sydney-Bold' // test to see if the font is loaded, feel free to remove this
  return (
    <View style={styles.container}>
      <TopNavBar />
      <Content />
      <BotNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexDirection: "column",
  },
});
