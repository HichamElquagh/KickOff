import React from "react";
import { StyleSheet, Text, View, Image , ScrollView, TouchableOpacity } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../../GlobalStyles";
import axios from "axios";
import { useState, useEffect } from "react";


const ListOfMatches = ({navigation,matches}) => {


  return (
    <ScrollView style={styles.depth1Frame2}>
   {matches.length != 0 && matches.map((match) => (
  <TouchableOpacity
   onPress={()=>{navigation.navigate('matchdetails',{matchId:match.id})}}
  key={match.id} style={styles.depth2Frame0}>
    {/* {match.participants.map((participant) => ( */}
      <Image
        // key={participant.id}
        style={styles.depth3Frame0}
        contentFit="cover"
        source={{ uri: match.participants[0].image_path }} />  
          {/* ))} */}

        <View style={styles.depth3Frame2}>
            <View style={styles.depth4Frame0}>
              <View style={styles.depth5Frame0}>
                <Text style={styles.wedJan4}>{match.starting_at}</Text>
              </View>
            </View>
          <View style={styles.depth4Frame1}>
            <View style={styles.depth5Frame0}>
             <Text style={styles.manchesterUnitedVs}>{match.name}</Text>
            </View>
         </View>
       </View>
       <Image
        // key={participant.id}
        style={styles.depth3Frame0}
        contentFit="cover"
        source={{ uri: match.participants[1].image_path }} /> 
  </TouchableOpacity>
))}

  </ScrollView>
  );
};
const styles = StyleSheet.create({
  depth3Frame0: {

    borderRadius: Border.br_9xs,
    width: 60,
    overflow: "hidden",
    height: 60,
    // marginLeft: 12,
  },
  wedJan4: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "center",
    marginRight: 10,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    height: 24,
    // width: 199,
    overflow: "hidden",
  },
  manchesterUnitedVs: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray,
    textAlign: "center",
    marginRight: 10,
  },
  depth4Frame1: {
    height: 21,
    width: 199,
    overflow: "hidden",
  },
  depth3Frame2: {
    height: 45,
    justifyContent: "center",
    marginLeft: 16,
    marginRight: 10,
    width: 199,

    // border : "1px solid #ededed",
  },
  depth2Frame0: {
    // position: "absolute",
    // top: 12,
    // left: 10,
    // width: 400,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // border : "1px solid #ededed",
    height: 90,
    
    // border : "1px solid #ededed",
    backgroundColor: "#ECEEF2",
    borderRadius: 20,
    padding: 16,
    // flexDirection: "row",
    // alignItems: "center",
    // height: 75,
    marginBottom: 15, // 
  },
  depth1Frame2: {
    backgroundColor: "#0C2D57",
    // width: 390,
    height: 100,
    padding :20,
  },
});

export default ListOfMatches;
