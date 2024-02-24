




import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';



const MatchDetail = ({navigation,  route }) => {
  const { matchId } = route.params;
  console.log(matchId , 'matchId');
  const [match, setMatch] = useState([]);
  const [matchidd, setmatchid] = useState(false)

  useEffect(() => {
    console.log(matchId , 'matchIddddddd');


    const fetchMatch = async () => {
      try {
        const uri = `https://api.sportmonks.com/v3/football/fixtures/${matchId}?include=league;participants;venue;season`;
        const response = await axios.get(uri, {
          headers: {
            'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
          }
        });
        setMatch(response.data.data);
        console.log(match.result_info , 'match.season'); 
        // console.log(response.data.data);
        // console.log(match);
      } catch (error) {
        console.log( error.message);
      }
    };

    fetchMatch();
  }, [matchidd]);


if(match.length === 0){
  return <Text>Loading...</Text>
}


     return (

  <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <View style={[styles.depth1Frame0, styles.depth1FrameLayout]}>
          <View style={[styles.depth2Frame0, styles.depth2FrameFlexBox]}>
            <View style={styles.depth3Frame0}>
              {/* <Image
                style={styles.depth4Frame0}
                contentFit="cover"
                source={{uri : match.participants[0].venue.image_path}}
              /> */}
            </View>
            <View style={styles.depth3Frame1}>
              <View style={styles.depth4Frame01}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.matchDetails, styles.matchDetailsTypo]}>
                    Match Details
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.depth3Frame2}>
              <View style={styles.depth4Frame02} />
            </View>
          </View>
        </View>
        <View style={styles.frameLayout}>
          <View style={styles.frameLayout}>
            <View style={[styles.depth3Frame01, styles.frameLayout]}>
              <Image
                style={[styles.depth4Frame03, styles.frameLayout]}
                contentFit="cover"
                source={{uri : match?.venue?.image_path ? match.venue.image_path : `https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=600`}}
              />
              {/* <Text style={[styles.liverpoolVsMan, styles.matchDetailsTypo]}>kdshfkjqdh
                  </Text> */}
            </View>
          </View>
        </View>
        <View style={[styles.depth1Frame2, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth5Frame0}>
            <Text style={[styles.liverpoolVsMan, styles.matchDetailsTypo]}>
              {match?.participants[0].name || ""}  vs {match?.participants[1].name || ""}
            </Text>
          </View>
        </View>
        <View style={styles.depth1FrameLayout}>
          <View style={[styles.depth2Frame03, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame02}>
              <View style={styles.depth4Frame04}>
                <View style={styles.depth5Frame0}>
                  <Text style={styles.dateTime}>Date & Time</Text>
                </View>
              </View>
              <View style={styles.depth4Frame1}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan9730am, styles.d8h12mTypo]}>
                    {match?.starting_at || ""} 
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.depth2Frame1}>
            <View style={styles.depth3Frame03}>
              <Text style={[styles.d8h12m, styles.d8h12mTypo]}>2d 8h 12m</Text>
            </View>
          </View>
        </View>
        <View style={styles.depth1FrameLayout}>
          <View style={[styles.depth2Frame04, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame04}>
              <View style={styles.depth4Frame05}>
                <View style={styles.depth5Frame0}>
                  <Text style={styles.dateTime}>Leagues</Text>
                </View>
              </View>
              <View style={styles.depth4Frame11}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan9730am, styles.d8h12mTypo]}>
                    {match?.league?.name || ""}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* <Image
            style={styles.depth2Frame11}
            contentFit="cover"
            source={require("../assets/depth-2-frame-1.png")}
          /> */}
        </View>
        <View style={styles.depth1FrameLayout}>
          <View style={[styles.depth2Frame05, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame05}>
              <View style={styles.depth4Frame06}>
                <View style={styles.depth5Frame0}>
                  <Text style={styles.dateTime}>Season</Text>
                </View>
              </View>
              <View style={styles.depth4Frame12}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan9730am, styles.d8h12mTypo]}>
                    {match?.season?.name || ""}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* <Image
            style={styles.depth2Frame11}
            contentFit="cover"
            source={require("../assets/depth-2-frame-1.png")}
          /> */}
        </View>
        <View style={styles.depth1FrameLayout}>
          <View style={[styles.depth2Frame06, styles.depth2FramePosition]}>
            <View style={styles.depth3Frame06}>
              <View style={styles.depth4Frame07}>
                <View style={styles.depth5Frame0}>
                  <Text style={styles.dateTime}>Result</Text>
                </View>
              </View>
              <View style={styles.depth4Frame13}>
                <View style={styles.depth5Frame0}>
                  <Text style={[styles.jan9730am, styles.d8h12mTypo]}>{match.result_info || '' }</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <Image
            style={styles.depth2Frame11}
            contentFit="cover"
            source={require("../assets/depth-2-frame-1.png")}
          /> */}
        </View>
        <View style={styles.depth1Frame7}>
          <View style={[styles.depth2Frame07, styles.frameBg]}>
            {/* <Image
              style={styles.depth3Frame07}
              contentFit="cover"
              source={require("../assets/depth-3-frame-0.png")}
            /> */}
            <View style={[styles.depth3Frame11, styles.frameBg]}>
              <View style={styles.depth5Frame0}>
                <Text style={styles.addToCalendar}>Add to Calendar</Text>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.depth1Frame8} />
        <View style={[styles.depth1Frame9, styles.depth1FrameSpaceBlock]}>
          <View style={styles.depth2Frame08}>
            <View style={styles.depth3FrameLayout}>
              <View style={[styles.depth4Frame09, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-0.png")}
                />
              </View>
              <View
                style={[styles.depth4Frame14, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame010}>
                  <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame12, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame010, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-01.png")}
                />
              </View>
              <View
                style={[styles.depth4Frame15, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame010}>
                  <Text style={[styles.live, styles.homeTypo]}>Live</Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame12, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame09, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-02.png")}
                />
              </View>
              <View
                style={[styles.depth4Frame16, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame010}>
                  <Text style={[styles.home, styles.homeTypo]}>Leagues</Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame12, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame09, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-03.png")}
                />
              </View>
              <View
                style={[styles.depth4Frame17, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame010}>
                  <Text style={[styles.home, styles.homeTypo]}>My Bets</Text>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame12, styles.depth3FrameLayout]}>
              <View style={[styles.depth4Frame09, styles.depth4FrameFlexBox]}>
                <Image
                  style={styles.depth4Frame0}
                  contentFit="cover"
                  source={require("../assets/depth-5-frame-04.png")}
                />
              </View>
              <View
                style={[styles.depth4Frame18, styles.depth4FrameSpaceBlock]}
              >
                <View style={styles.depth5Frame010}>
                  <Text style={[styles.home, styles.homeTypo]}>Account</Text>
                </View>
              </View>
            </View>
          </View>
        </View> */}
        {/* <View style={styles.depth1Frame10} /> */}
      </View>
      <Navigation  navigation={navigation} />

    </View>
  );
};

const styles = StyleSheet.create({

  depth1FrameLayout: {
    height: 72,
    width: 390,
    backgroundColor:  "#f7fafc",
  },
  depth2FrameFlexBox: {
    width: 358,
    alignItems: "center",
    flexDirection: "row",
  },
  matchDetailsTypo: {
    textAlign: "left",
    fontFamily: "Lexend-Bold",
    fontWeight: "700",
    letterSpacing: 0,
    color:  "#0d171c",
  },
  frameLayout: {
    height: 218,
    width: '100%',
  },
  depth1FrameSpaceBlock: {
    paddingBottom: 12,
    paddingHorizontal: 16,
    width: 390,
  },
  depth2FramePosition: {
    left: 16,
    top: 13,
    height: 45,
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
  },
  d8h12mTypo: {
    fontFamily:  "Lexend-Regular",
    color:  "#4d7a99",
    lineHeight: 21,
    fontSize:  14,
    textAlign: "left",

  },
  frameBg: {
    backgroundColor: "#1294ed",
    overflow: "hidden",
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
    lineHeight: 18,
    fontSize: 12,
    fontFamily:  "Lexend-Medium",
    fontWeight: "500",
    letterSpacing: 0,
  },
  depth3FrameLayout: {
    width: 65,
    height: 54,
    alignItems: "center",
  },
  depth4Frame0: {
    height: 24,
    width: 24,
  },
  depth3Frame0: {
    width: 48,
    alignItems: "center",
    flexDirection: "row",
    height: 48,
  },
  matchDetails: {
    fontSize: 18,
    lineHeight: 23,
  },
  depth5Frame0: {
    alignSelf: "stretch",
  },
  depth4Frame01: {
    width: 122,
    height: 23,
    overflow: "hidden",
  },
  depth3Frame1: {
    width: 262,
    justifyContent: "center",
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  depth4Frame02: {
    justifyContent: "flex-end",
    width: 48,
    alignItems: "center",
    height: 48,
  },
  depth3Frame2: {
    width: 48,
    flexDirection: "row",
    height: 48,
  },
  depth2Frame0: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 48,
  },
  depth1Frame0: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  depth4Frame03: {
    top: 0,
    left: 0,
    zIndex: 0,
    position: "absolute",
    overflow: "hidden",
  },
  depth3Frame01: {
    overflow: "hidden",
    backgroundColor:  "#f7fafc",
  },
  liverpoolVsMan: {
    fontSize: 22,
    lineHeight: 28,
  },
  depth1Frame2: {
    height: 60,
    paddingTop: 20,
  },
  dateTime: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily:  "Lexend-Medium",
    fontWeight: "500",
    textAlign: "left",
    color:  "#0d171c",
  },
  depth4Frame04: {
    width: 128,
    height: 24,
    overflow: "hidden",
  },
  jan9730am: {
    color:  "#4d7a99",
  },
  depth4Frame1: {
    height: 21,
    width: 400,
    overflow: "hidden",
  },
  depth3Frame02: {
    width: 128,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame03: {
    width: 201,
    height: 45,
  },
  d8h12m: {
    color:  "#4d7a99",
    alignSelf: "stretch",
  },
  depth3Frame03: {
    width: 68,
    height: 21,
  },
  depth2Frame1: {
    top: 25,
    left: 306,
    width: 68,
    height: 21,
    position: "absolute",
  },
  depth4Frame05: {
    width: 108,
    height: 24,
    overflow: "hidden",
  },
  depth4Frame11: {
    width: 108,
    height: 21,
    overflow: "hidden",
  },
  depth3Frame04: {
    width: 108,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame04: {
    width: 211,
    height: 45,
  },
  depth2Frame11: {
    top: 22,
    left: 346,
    width: 28,
    height: 28,
    position: "absolute",
  },
  depth4Frame06: {
    width: 68,
    height: 24,
    overflow: "hidden",
  },
  depth4Frame12: {
    width: 200,
    height: 21,
    overflow: "hidden",
  },
  depth3Frame05: {
    width: 68,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame05: {
    width: 191,
    height: 45,
  },
  depth4Frame07: {
    width: 51,
    height: 24,
    overflow: "hidden",
  },
  depth4Frame13: {
    width: 300,
    height: 21,
    overflow: "hidden",
  },
  depth3Frame06: {
    width: 51,
    height: 45,
    justifyContent: "center",
  },
  depth2Frame06: {
    width: 182,
    height: 45,
  },
  depth3Frame07: {
    width: 20,
    height: 20,
  },
  addToCalendar: {
    color:  "#f7fafc",
    lineHeight: 21,
    fontSize: 16,
    textAlign: "left",
    fontFamily: "Lexend-Bold",
    fontWeight: "700",
    letterSpacing: 0,
  },
  depth3Frame11: {
    width: 119,
    marginLeft: 8,
    height: 21,
  },
  depth2Frame07: {
    borderRadius: 12,
    height: 40,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 358,
    paddingHorizontal: 16,
  },
  depth1Frame7: {
    height: 64,
    paddingVertical: 12,
    flexDirection: "row",
    paddingHorizontal: 16,
    width: 390,
  },
  // depth1Frame8: {
  //   height: 48,
  //   width: 390,
  // },
  // depth4Frame09: {
  //   paddingHorizontal: 0,
  //   paddingVertical: Padding.p_9xs,
  //   width: 24,
  // },
  // home: {
  //   color:  "#4d7a99",
  // },
  // depth5Frame010: {
  //   alignSelf: "stretch",
  //   alignItems: "center",
  // },
  // depth4Frame14: {
  //   width: 36,
  // },
  // depth4Frame010: {
  //   borderRadius: 16,
  //   justifyContent: "center",
  //   width: 48,
  // },
  // live: {
  //   color:  "#0d171c",
  //   textAlign: "center",
  //   lineHeight: 18,
  //   fontSize: 12,
  // },
  // depth4Frame15: {
  //   width: 25,
  // },
  // depth3Frame12: {
  //   marginLeft: 8,
  // },
  // depth4Frame16: {
  //   width: 51,
  // },
  // depth4Frame17: {
  //   width: 48,
  // },
  // depth4Frame18: {
  //   width: 49,
  // },
  // depth2Frame08: {
  //   height: 54,
  //   flexDirection: "row",
  //   width: 358,
  // },
  // depth1Frame9: {
  //   borderStyle: "solid",
  //   borderColor: "#e8edf2",
  //   borderTopWidth: 1,
  //   height: 75,
  //   paddingTop: 8,
  //   backgroundColor:  "#f7fafc",
  // },
  depth1Frame10: {
    height: 20,
    width: 390,
    backgroundColor:  "#f7fafc",
  },
  depth0Frame0: {
    // overflow: "hidden",
    backgroundColor: "#f7fafc",
  },
  galileoDesign: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default MatchDetail;
