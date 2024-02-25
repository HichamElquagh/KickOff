

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
import axios from "axios";
import Navigation from "../components/Navigation";

const AllPlayers = ({ navigation }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `https://api.sportmonks.com/v3.0/football/players`,
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
    return <Text style={styles.loading}>Loading...</Text>;
  }

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.sportmonks.com/v3.0/football/players/search/${searchQuery}`,
        {
          headers: {
            Authorization:
              "hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX",
          },
        }
      );
      setPlayers(response.data.data);
    } catch (error) {
      setError(error);
      console.log(error.message);
    }
  };
  //   if (error) {
  //     return <Text style={styles.loading}>Error: {error.message}</Text>;
  //   }

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
    handleSearch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.container12}>
        <View style={styles.container1}>
          <Text style={styles.matches}>All Players</Text>
        </View>
      </View>
      <View style={styles.serachcontainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search players..."
          value={searchQuery}
          onChangeText={handleSearchQueryChange}
        />
      </View>
      <ScrollView>
        { players && players.length !== 0 ?
          players.map((player) => (
            <TouchableOpacity
            onPress={()=>{navigation.navigate('playerdetails',{playerId:player.id})}}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "95%",
                height: 150,
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
            </TouchableOpacity>
            )) : <Text style={styles.noResults}>No players found.</Text>}
      </ScrollView>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  serachcontainer: {
    width: "100%",
    justifyContent: "center",
    height: 85,
    alignItems: "center",
    flexDirection: "row",
  },
  searchInput: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
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

export default AllPlayers;
