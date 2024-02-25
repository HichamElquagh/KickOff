import {useEffect,useState} from "react";
import { Text, StyleSheet, View , Image } from "react-native";
// import { Image } from "expo-image";
import Navigation from "../components/Navigation";
import MatchFilterContainer from "../components/MatchFilterContainer";
import ListOfMatches from "../components/ListOfMatches";
import { Padding, Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import axios from "axios";

const AllMatches = ({navigation}) => {
  const [matches, setMatches] = useState([]);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    
    const fetchMatches = async () => {

      try {
        const uri = `https://api.sportmonks.com/v3/football/fixtures?include=participants&league_id=${activeNav}`;
        const response = await axios.get(uri, {
          headers: {
            'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
          }
        });
        console.log(response.data.data);
        setMatches(response.data.data); 
        // setActiveNav(response.data.data[0].league_id); 
        console.log(response.data.data[0].id , 'response.data.data[0].id');
      } catch (error) {
        console.log("Error fetching matches:", error.message);
      }
    };
    if(activeNav){
      console.log(activeNav);
      fetchMatches();
    }

    
  }, [activeNav]);

  const handleNavigation = (item) => {
    setActiveNav(item);
console.log(item); 
 }
  return (
    // <View style={styles.galileoDesign}>
      <View style={styles.depth0Frame0}>
        <MatchFilterContainer navigationId={activeNav} handleNavigation={handleNavigation} />
       {matches && matches.length > 0 && <ListOfMatches matches={matches} navigation={navigation} />}
        
       <Navigation navigation={navigation} />
      </View>
    // {/* </View> */}
  );
};

const styles = StyleSheet.create({

  depth4FrameSpaceBlock: {
    marginTop: 4,
    height: 18,
    alignItems: "center",
  },
  // homeTypo: {
  //   textAlign: "center",
  //   lineHeight: 18,
  //   letterSpacing: 0,
  //   fontSize: FontSize.size_xs,
  //   fontFamily: FontFamily.interMedium,
  //   fontWeight: "500",
  // },
  depth3FrameLayout: {
    width: 65,
    height: 54,
    alignItems: "center",
  },

  depth4Frame0: {
    alignSelf: "stretch",
  },
  depth3Frame0: {
    width: 78,
    height: 21,
  },
  depth3Frame1: {
    width: 20,
    marginLeft: 8,
    height: 20,
  },
  depth2Frame0: {
    width: 130,
  },
  depth3Frame01: {
    width: 111,
    height: 21,
  },
  depth2Frame1: {
    width: 163,
    marginLeft: 12,
  },

  depth1Frame5: {
    height: 325,
    width: 390,
  },
  depth5Frame0: {
    height: 24,
    width: 24,
  },
  // depth4Frame02: {
  //   paddingHorizontal: 0,
  //   paddingVertical: Padding.p_9xs,
  //   width: 24,
  //   alignItems: "center",
  //   height: 32,
  //   flexDirection: "row",
  // },
  home: {
    color: "#6b6b6b",
  },
  depth5Frame01: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  depth4Frame1: {
    width: 35,
  },
  depth4Frame03: {
    borderRadius: 16,
    width: 48,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    flexDirection: "row",
  },
  matches: {
    color: "#000",
  },
  depth4Frame11: {
    width: 51,
  },
  depth3Frame12: {
    marginLeft: 8,
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
  depth2Frame01: {
    width: 358,
    height: 54,
    flexDirection: "row",
  },
  // depth1Frame6: {
  //   borderStyle: "solid",
  //   borderColor: Color.colorWhitesmoke,
  //   borderTopWidth: 1,
  //   height: 75,
  //   paddingHorizontal: Padding.p_base,
  //   paddingTop: Padding.p_5xs,
  //   paddingBottom: Padding.p_xs,
  //   width: 390,
  //   backgroundColor: Color.colorWhite,
  // },
  depth1Frame7: {
    height: 20,
    width: 390,
    backgroundColor: "#fff",
  },
  depth0Frame0: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",

  },
  galileoDesign: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
  },
});

export default AllMatches;
