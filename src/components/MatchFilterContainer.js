import * as React from "react";
import { StyleSheet, View, Text ,  Image } from "react-native";
// import { Image } from "expo-i

const MatchFilterContainer = () => {
  return (
    <View style={styles.container}>
        <View style={styles.container1}>
              <Text style={styles.matches}>Matches</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({


  matches: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 23,
    height: 30,
    fontWeight: "700",
    fontFamily: "Inter-Medium",
    color: "#000",
  },


  container1: {
    marginTop: 57,
    width: "100%",
    justifyContent: "center",
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },


  container: {
    // backgroundColor: "#fff",
    width: 390,
    height: 80,
    paddingHorizontal: "16px",
    paddingTop: "16px",
    paddingBottom: "8px",
  },
});

export default MatchFilterContainer;
