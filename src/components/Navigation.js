import * as React from "react";
import { StyleSheet, View, Text , Image , TouchableOpacity } from "react-native";

const Navigation = ({navigation}) => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.menuItemsContainer}>
        <TouchableOpacity
         style={styles.menuItem}
         >
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/depth-5-frame-01.png")}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{navigation.navigate('Home')}}
         style={styles.menuItem}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/depth-5-frame-02.png")}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Matches</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{navigation.navigate('allplayers')}}
         style={styles.menuItem}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/depth-5-frame-03.png")}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Players</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('Favorites')}}
         style={styles.menuItem}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../assets/depth-5-frame-04.png")}
            />
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Favorites</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#ededed",
    borderTopWidth: 1,
    width: "100%",
    height: 75,
    paddingTop: 8,
    paddingBottom: 12,
  },
  menuItemsContainer: {
    flexDirection: "row",
    width: 358,
    height: 54,
  },
  menuItem: {
    width: 96,
    alignItems: "center",
    height: 54,
    marginLeft: 8,
  },
  iconContainer: {
    height: 32,
    alignItems: "center",
    flexDirection: "row",
  },
  labelContainer: {
    marginTop: 4,
    height: 18,
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    fontWeight: "500",
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: 12,
    color: "#000",
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default Navigation;
