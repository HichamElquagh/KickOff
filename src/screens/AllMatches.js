  import {useEffect,useState} from "react";
  import { Text, StyleSheet, View , Image , ActivityIndicator } from "react-native";
  // import { Image } from "expo-image";
  import Navigation from "../components/Navigation";
  import MatchFilterContainer from "../components/MatchFilterContainer";
  import ListOfMatches from "../components/ListOfMatches";
  import axios from "axios";

  const AllMatches = ({navigation}) => {
    const [matches, setMatches] = useState([]);
    const [activeNav, setActiveNav] = useState(null);
    const [loading, setLoading] = useState(true);

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
        } finally {
          setLoading(false);
        }

      };
      if(activeNav){
        fetchMatches();
      }

      
    }, [activeNav]);

    const handleNavigation = (item) => {
      setActiveNav(item);
  }
    return (
      // <View style={styles.galileoDesign}>
      <View style={styles.containerP}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
          <MatchFilterContainer navigationId={activeNav} handleNavigation={handleNavigation} />
        { matches && matches.length > 0 && <ListOfMatches matches={matches} navigation={navigation} />}
          
        <Navigation navigation={navigation} />
        </View>
      // {/* </View> */}
    );
  };

  const styles = StyleSheet.create({

    containerP: {
      flex: 1,
      height: "100%",
      overflow: "hidden",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      

    },

  });

  export default AllMatches;
