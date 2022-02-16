import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function BotNavBar() {
  return (
    <View style={styles.botNavBar}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icons}
          source={require("../assets/Icons/discover_light.png")}
        />
        <Text style={styles.itemText}>Discover</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icons}
          source={require("../assets/Icons/heart_light.png")}
        />
        <Text style={styles.itemText}>Matches</Text>
      </View>
      <View style={styles.itemContainer}>
        <Image
          style={styles.icons}
          source={require("../assets/Icons/messages_light.png")}
        />
        <Text style={styles.itemText}>DMs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botNavBar: {
    display: "flex",
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 10,
  },
  itemContainer: {
    width: 60,
    height: 65,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  itemText: {
    color: "white",
    fontFamily: "Sydney",
  },
});
