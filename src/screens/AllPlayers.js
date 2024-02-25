import { StyleSheet , View , Text , Image, ScrollView } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";




const AllPlayers = ({navigation}) => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchPlayers = async () => {
        try {
            const response = await axios.get(`https://api.sportmonks.com/v3.0/football/players`,
            {
                headers: {
                    Authorization:
                    "hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX",
                },
            }
            );
            console.log(response.data.data);
            setPlayers(response.data.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };
    
        fetchPlayers();
    }, []);
    
    if (loading) {
        return <Text>Loading...</Text>;
    }
    
    if (error) {
        return <Text>Error: {error.message}</Text>;
    }
    
    return (
        // <View>
        //     <Text>All Players</Text>
        //     {players.length != 0 && players.map((player) => (
        //     <View key={player.id} style={{margin: 10, padding: 10, backgroundColor: '#f8f8f8', borderRadius: 5}}>
        //         <Text style={{fontWeight: 'bold', fontSize: 18}}>{player.display_name}</Text>
        //         <Text>Nationality ID: {player.nationality_id}</Text>
        //         <Text>Position ID: {player.position_id}</Text>
        //         <Text>Date of Birth: {player.date_of_birth}</Text>
        //         <Text>Gender: {player.gender}</Text>
        //         <Image source={{uri: player.image_path}} style={{width: 100, height: 100}} />
        //     </View>
        // ))}
        //  <Navigation  navigation={navigation} />

        // </ View>
       <View style={styles.container}>
         <View style={styles.container12}>
        <View style={styles.container1}>
              <Text style={styles.matches}>All Players</Text>
              
        </View>
    </View>
        <ScrollView >
    {players.length != 0 && players.map((player) => (

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "95%",
            height: 150,
            backgroundColor: "#009bc9",
            marginRight: 10,
            marginLeft: 10,
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text style={{ marginTop: 20, fontSize: 15, color: "#FFFFFF" }}>
                {player?.position?.name ? player?.position?.name: "Midfielder"}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: player?.image_path,
                }}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60,
                  marginTop: 10,
                }}
              />
              <Image
                source={{
                  uri: player?.nationality?.image_path,
                }}
                style={{
                  width: 20,
                  height: 10,
                  bottom: 10,
                  left: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                {player.display_name}
              </Text>
            </View>
            <View>
              <Text style={{ marginTop: 20, fontSize: 15, color: "#FFFFFF" }}>
                {player.date_of_birth}
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "90%",
              borderWidth: 0.5,
              borderColor: "#CCCCCC",
              borderRadius: 20,
              marginTop: 10,
            }}
          ></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            <Text style={{ marginTop: 10, fontSize: 15, color: "#FFFFFF" }}>
              Gender{" : "}
              {player.gender}
            </Text>
            <Text style={{ marginTop: 10, fontSize: 15, color: "#FFFFFF" }}>
              Weight{" : "}
              {player.weight}
            </Text>
            <Text style={{ marginTop: 10, fontSize: 15, color: "#FFFFFF" }}>
              Height{" : "}
              {player.weight}
            </Text>
          </View>
       
        </View>
                ))}

      </ScrollView>
     <Navigation  navigation={navigation} />
      </View>
      
    );
  
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        },
        container12: {
            // backgroundColor: "#fff",
            // width: 390,
            height: 80,
            paddingHorizontal: "16px",
            paddingTop: "16px",
            paddingBottom: "8px",
            textAlign: "center",
          },
        container1: {

            marginTop: 57,
            width: "100%",
            justifyContent: "center",
            height: 23,
            alignItems: "center",
            flexDirection: "row",
          },
          matches: {
            fontSize: 16,
            letterSpacing: 0,
            lineHeight: 23,
            height: 30,
            textAlign: "center",
            fontWeight: "700",
            // fontFamily: "Inter-Medium",
            color: "#000",
            width: "100%",
          },
      });




    export default AllPlayers;


