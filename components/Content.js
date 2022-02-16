import * as React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";

export default function Content() {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.profileBox}>
        {/* <Image
          style={styles.profile}
          source={require("../assets/Profiles/mtl.jpg")}
        /> */}
        <ImageBackground
          source={require("../assets/Profiles/mtl.jpg")}
          resizeMode="cover"
          style={styles.profile}
          imageStyle={{ borderRadius: 15 }}
        >
          <Text style={styles.profileTitle}>MTL</Text>
          <Text style={styles.profileText}>2 miles away</Text>
        </ImageBackground>
      </View>
      <View style={styles.audioBox}>
        <Text style={styles.audioText}>My hottest take</Text>
        <View style={styles.waveformBox}>
          <Image
            style={styles.player}
            source={require("../assets/Icons/player_light.png")}
          />
          <Image
            style={styles.waveform}
            source={require("../assets/Icons/audio_waveform_light.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "blue",
    // borderWidth: 3,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
    width: "90%",
    height: "65%",
  },
  profileBox: {
    display: "flex",
    flex: 0.7,
    width: "100%",
    height: "100%",
    borderColor: "red",
    // borderWidth: 2,
    borderRadius: 15,
  },
  profile: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    resizeMode: "contain",
  },
  audioBox: {
    display: "flex",
    flex: 0.3,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    width: "100%",
    height: "20%",
    borderColor: "green",
    // borderWidth: 2,
    borderRadius: 25,
    shadowColor: "#000",
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    marginTop: 10,
  },
  waveformBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  player: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
  waveform: {
    display: "flex",
    width: 250,
    height: 50,
    resizeMode: "contain",
  },
  audioText: {
    fontFamily: "Sydney",
    fontSize: 24,
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },
  profileTitle: {
    color: "white",
    fontSize: 32,
    fontFamily: "Sydney",
    paddingLeft: 16,
    paddingTop: 10,
  },
  profileText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Sydney",
    paddingLeft: 12,
    paddingBottom: 12,
  },
});
