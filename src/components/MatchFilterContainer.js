import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text ,  Image ,ScrollView, TouchableOpacity, FlatList } from "react-native";
// import { Image } from "expo-i


const MatchFilterContainer = ({navigationId,handleNavigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {

   const GetLeagueName = async ()=>{
    const uri = `https://api.sportmonks.com/v3/football/leagues`
    try {
       const response = await axios.get(uri,
        {
          headers: {
            Authorization:
            "hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX",
          },
        }
        
        )
        setData(response.data.data);
        handleNavigation(response.data.data[0].id);
    
    } catch (error) {
      console.log(error.message);
      
    }

     
      // .get("https://api.sportmonks.com/v3/football/leagues", {
      //   headers: {
      //     Authorization:
      //       "hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX",
      //   },
      // })
      // .then((response) => {
      //   setData(response.data.data);
      //   handleNavigation(response.data.data[0].id);
      // });

    }
    GetLeagueName();
  }, []);
  return (
    <>
    <View style={styles.container}>
        <View style={styles.container1}>
              <Text style={styles.matches}>All Matches</Text>
              
        </View>
    </View>
    <View style={styles.FilterContainer}>
          <ScrollView horizontal style={styles.depth1Frame1}>
           {data.length != 0 &&  data.map((item) => (
             <TouchableOpacity onPress={()=>{handleNavigation(item.id)}}>
                  <Text> {item.id}E {navigationId}</Text>
                  <View style={[styles.depth3Frame01,{backgroundColor : navigationId==item.id ? "green": "white"}]}>
                      <Text numberOfLines={1} style={styles.allMatches}   >{item.name}</Text>
                  </View>
                </TouchableOpacity>
            ))}
          {/* <TouchableOpacity onPress={()=>{handleNavigation('All matches')}}>
            <View style={styles.depth3Frame01}>
                <Text style={styles.allMatches}   >All Matches</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.depth3Frame01}>
                <Text style={styles.allMatches}>League Matches</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.depth3Frame01}>
                <Text style={styles.allMatches}>League Matches</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.depth3Frame01}>
                <Text style={{color:"black"}}>League Matches</Text>
            </View>
          </TouchableOpacity> */}
{/* 
    <TouchableOpacity style={[styles.depth2Frame1, styles.depth2FrameFlexBox]}>
      <View style={styles.depth3Frame01}>
        <View style={styles.depth4Frame0}>
          <Text style={styles.allMatches}>League Matches</Text>
        </View>
      </View>
      
    </TouchableOpacity>

    <TouchableOpacity style={[styles.depth2Frame1, styles.depth2FrameFlexBox]}>
      <View style={styles.depth3Frame01}>
        <View style={styles.depth4Frame0}>
          <Text style={styles.allMatches}>League Matches</Text>
        </View>
      </View>
      
    </TouchableOpacity>
     */}
  </ScrollView>
  </View>
  </>
    
  );
};

const styles = StyleSheet.create({

  FilterContainer: {
    backgroundColor: "#0C2D57",
    width: "100%",
    height: 56,
    paddingHorizontal: "16px",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  matches: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 23,
    height: 30,
    fontWeight: "700",
    // fontFamily: "Inter-Medium",
    color: "#000",
  },  depth2Frame1: {
    width: 163,
    marginLeft: 12,
  },
  depth3Frame1: {
    width: 20,
    marginLeft: 8,
    height: 20,
    
  },
  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth2Frame1: {
    width: 163,
    marginLeft: 12,
  },
  depth3Frame01: {
    width: 124,
    height: 31,
    borderRadius: 16,
    // paddingHorizontal: 16,
    // paddingVertical: 16,
    // backgroundColor: "#B2F1F8",
    backgroundColor: "white",
    justifyContent: "center",
    marginRight : 12 ,
    
  },
  depth2FrameFlexBox: {
    

    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    flexDirection: "row",
  },
  depth1Frame1: {
    height: 56,
    padding: 12,
    flexDirection: "row",
    overflow: "hidden",
    width: "100%",
    // justifyContent: "space-between",

  },
  allMatches: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    color: "black",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
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
    // width: 390,
    height: 80,
    paddingHorizontal: "16px",
    paddingTop: "16px",
    paddingBottom: "8px",
  },
});

export default MatchFilterContainer;
