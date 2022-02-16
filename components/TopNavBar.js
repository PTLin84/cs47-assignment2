import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function TopNavBar() {
  return (
    <View style={styles.topNavBar}>
      <View style={styles.items}>
        <Image
          style={styles.icons}
          source={require("../assets/Icons/menu_light.png")}
        />
      </View>
      <View style={styles.items}>
        <Text style={styles.logo}>ensom</Text>
      </View>
      <View style={styles.items}>
        <Image
          style={styles.icons}
          source={require("../assets/Icons/sun.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavBar: {
    display: "flex",
    backgroundColor: "#F7F7F7",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    paddingTop: 60,
  },
  items: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontFamily: "Sydney-Bold",
    fontSize: 32,
  },
  icons: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
});
