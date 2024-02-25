import * as React from "react";

// import { Image } from "expo-image";
import { StyleSheet, View, Text , Image , TouchableOpacity } from "react-native";

const Navigation = ({navigation}) => {
  return (
    <View style={styles.depth1Frame6}>
      <View style={styles.depth2Frame0}>
        <TouchableOpacity
         style={[styles.depth3Frame0, styles.depth3FrameLayout]}
         >
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-01.png")}
            />
          </View>
          <View style={[styles.depth4Frame1, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
                 onPress={()=>{navigation.navigate('Home')}}

         style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame01, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-02.png")}
            />
          </View>
          <View style={[styles.depth4Frame11, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.matches, styles.homeTypo]}>Matches</Text>
            </View>
          </View>
        </TouchableOpacity  >
        <TouchableOpacity
                  onPress={()=>{navigation.navigate('allplayers')}} 
        style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-03.png")}
            />
          </View>
          <View style={[styles.depth4Frame12, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Players</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.depth3Frame1, styles.depth3FrameLayout]}>
          <View style={[styles.depth4Frame0, styles.depth4FrameFlexBox]}>
            <Image
              style={styles.depth5Frame0}
              contentFit="cover"
              source={require("../assets/depth-5-frame-04.png")}
            />
          </View>
          <View style={[styles.depth4Frame13, styles.depth4FrameSpaceBlock]}>
            <View style={styles.depth5Frame01}>
              <Text style={[styles.home, styles.homeTypo]}>Stats</Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  depth3FrameLayout: {
    width: 96,
    alignItems: "center",
    height: 54,
  },
  depth4FrameFlexBox: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    marginTop: 4,
    height: 18,
    alignItems: "center",
  },
  homeTypo: {
    textAlign: "center",
    // fontFamily: "Inter-Medium",
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: 12,
  },
  depth5Frame0: {
    height: 24,
    width: 24,
  },
  depth4Frame0: {
    paddingHorizontal: 0,
    paddingVertical:"4px",
    width: 24,
  },
  home: {
    color: "#000",
  },
  depth5Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 35,
  },
  depth3Frame0: {
    alignItems: "center",
  },
  depth4Frame01: {
    borderRadius: "50%",
    width: 48,
    justifyContent: "center",
  },
  matches: {
    color: "#000",
  },
  depth4Frame11: {
    width: 51,
  },
  depth3Frame1: {
    marginLeft: 8,
    alignItems: "center",
  },
  depth4Frame12: {
    width: 39,
  },
  depth4Frame13: {
    width: 31,
  },
  depth4Frame14: {
    width: 30,
  },
  depth2Frame0: {
    width: 358,
    flexDirection: "row",
    height: 54,
  },
  depth1Frame6: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#ededed",
    borderTopWidth: 1,
    width: 390,
    height: 75,
    paddingHorizontal: "16px",
    paddingTop: "8px",
    paddingBottom: "12px",
  },
});

export default Navigation;
