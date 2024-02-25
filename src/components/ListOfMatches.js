import React from "react";
import { StyleSheet, Text, View, Image , ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";

const ListOfMatches = ({navigation, matches}) => {
  return (
    <ScrollView style={styles.container}>
      {matches.length !== 0 && matches.map((match) => (
        <TouchableOpacity
          onPress={() => {navigation.navigate('matchdetails',{matchId: match.id})}}
          key={match.id} style={styles.matchContainer}>
          <Image
            style={styles.avatar}
            contentFit="cover"
            source={{ uri: match.participants[0].image_path }} />  
          <View style={styles.detailsContainer}>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>{match.starting_at}</Text>
            </View>
            <View style={styles.matchNameContainer}>
              <Text style={styles.matchNameText}>{match.name}</Text>
            </View>
          </View>
          <Image
            style={styles.avatar}
            contentFit="cover"
            source={{ uri: match.participants[1].image_path }} /> 
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C2D57",
    padding: 20,
  },
  matchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 90,
    backgroundColor: "#ECEEF2",
    borderRadius: 20,
    padding: 16,
    marginBottom: 15, 
  },
  avatar: {
    borderRadius: 60,
    width: 60,
    overflow: "hidden",
    height: 60,
  },
  detailsContainer: {
    height: 45,
    justifyContent: "center",
    marginLeft: 16,
    marginRight: 10,
    width: 199,
  },
  dateContainer: {
    height: 24,
    overflow: "hidden",
  },
  dateText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    color: "#000",
    textAlign: "center",
    marginRight: 10,
  },
  matchNameContainer: {
    height: 21,
    width: 199,
    overflow: "hidden",
  },
  matchNameText: {
    fontSize: 16,
    lineHeight: 21,
    color: "#000",
    textAlign: "center",
    marginRight: 10,
  },
});

export default ListOfMatches;
