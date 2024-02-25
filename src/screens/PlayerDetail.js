

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import Navigation from "../components/Navigation";

const PlayerDetail = ({ navigation , route }) => {
    const {playerId} = route.params;
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `https://api.sportmonks.com/v3.0/football/players/${playerId}?include=nationality;position`,
          {
            headers: {
              Authorization:
                "hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX",
            },
          }
        );
        console.log(response.data.data);
        setPlayer(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }



  return (
    <View style={styles.container}>
      <View style={styles.container12}>
        <View style={styles.container1}>
          <TouchableOpacity style={{ paddingStart : 30}} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
          <Text style={styles.matches}> Player Details</Text>
        </View>
      </View>     

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "95%",
                height: "30%",
                backgroundColor: "#0C2D57",
                marginRight: 10,
                marginLeft: 10,
                borderRadius: 20,
                marginTop: 10,
              }}
              key={player.id}
              >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View>
                  <Text
                    style={{ marginTop: 20, fontSize: 15, color: "#FFFFFF" }}
                  >
                    {player?.position?.name
                      ? player?.position?.name
                      : "Midfielder"}
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
                  <Text
                    style={{ marginTop: 20, fontSize: 15, color: "#FFFFFF" }}
                  >
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
                  Gender: {player.gender}
                </Text>
                <Text style={{ marginTop: 10, fontSize: 15, color: "#FFFFFF" }}>
                  Weight: {player.weight}
                </Text>
                <Text style={{ marginTop: 10, fontSize: 15, color: "#FFFFFF" }}>
                  Height: {player.height}
                </Text>
              </View>
            </View>
        {/* {player.length === 0 && (
          <Text style={styles.noResults}>Noplayers found.</Text>
        )} */}
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#fff",
  paddingBottom: "50px", 

  },

  container12: {
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
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
    color: "#000",
    width: "100%",
  },
  loading: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    marginTop: 10,
  },
  noResults: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});

export default PlayerDetail;
