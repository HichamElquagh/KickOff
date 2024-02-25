import axios from "axios";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

const MatchFilterContainer = ({ navigationId, handleNavigation }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getLeagueName = async () => {
      const uri = `https://api.sportmonks.com/v3/football/leagues`;
      try {
        const response = await axios.get(uri, {
          headers: {
            Authorization:
              "hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX",
          },
        });
        setData(response.data.data);
        handleNavigation(response.data.data[0].id);
      } catch (error) {
        console.log(error.message);
      }
    };
    getLeagueName();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>All Matches</Text>
        </View>
      </View>
      <View style={styles.filterContainer}>
        <ScrollView horizontal style={styles.filterList}>
          {data.length !== 0 &&
            data.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  handleNavigation(item.id);
                }}
              >
                <View
                  style={[
                    styles.filterItem,
                    {
                      backgroundColor:
                        navigationId === item.id ? "green" : "white",
                    },
                  ]}
                >
                  <Text numberOfLines={1} style={styles.filterText}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    backgroundColor: "#0C2D57",
    width: "100%",
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
  },
  title: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 23,
    height: 30,
    fontWeight: "700",
    color: "#000",
  },
  filterItem: {
    width: 124,
    height: 31,
    borderRadius: 16,
    backgroundColor: "white",
    justifyContent: "center",
    marginRight: 12,
  },
  filterText: {
    fontSize: 14,
    lineHeight: 21,
    textAlign: "center",
    color: "black",
    fontFamily: "Inter-Medium",
    fontWeight: "500",
  },
  container: {
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  titleContainer: {
    marginTop: 34,
    width: "100%",
    justifyContent: "center",
    height: 23,
    alignItems: "center",
    flexDirection: "row",
  },
  filterList: {
    flexDirection: "row",
    paddingVertical: 12,
  },
});

export default MatchFilterContainer;
