import React from "react";
import { StyleSheet, Text, View, Image , ScrollView } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../../GlobalStyles";
import axios from "axios";
import { useState, useEffect } from "react";


const ScheduleContainer = () => {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('https://api.sportmonks.com/v3/football/fixtures?include=participants', {
          headers: {
            'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
          }
        });
        setMatches(response.data.data); // Assuming the match data is in response.data.data
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);


  return (
    <ScrollView style={styles.depth1Frame2}>
   {matches.map((match) => (
  <View key={match.id} style={styles.depth2Frame0}>
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
  </View>
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
    textAlign: "left",
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame0: {
    height: 24,
    width: 199,
    overflow: "hidden",
  },
  manchesterUnitedVs: {
    fontSize: FontSize.size_sm,
    lineHeight: 21,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDimgray,
    textAlign: "left",
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
    // marginRight: 16,
    width: 199,

    // border : "1px solid #ededed",
  },
  depth2Frame0: {
    // position: "absolute",
    top: 12,
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
    // backgroundColor: "#fff",
    // width: 390,
    height: 100,
    padding :20,
  },
});

export default ScheduleContainer;
