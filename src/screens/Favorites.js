import React from "react";
import { StyleSheet, Text, View, Image , ScrollView, TouchableOpacity } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import { DataContext } from "../../context/DataProvider";
import { FontAwesome } from '@expo/vector-icons';
import Navigation from "../components/Navigation";

const Favorites = ({navigation}) => {
    const {favorites , removeItem} = React.useContext(DataContext);
  return (
    <>
    <View style={styles.favoriteHeader}>
    <TouchableOpacity style={{marginTop : 34}} onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Favorite</Text>
    </View>
  </View>
    <ScrollView style={styles.container}>
      {favorites.length !== 0 && favorites.map((match) => (

        <TouchableOpacity
          onPress={() => {navigation.navigate('matchdetails',{matchId: match.id})}}
          key={match.id} style={styles.matchContainer}>
            
            <TouchableOpacity style={{position : "absolute", top:3 , right: 3  }} onPress={() => removeItem(match)}>
            <FontAwesome name="trash" size={24} color="red" />

                    </TouchableOpacity>
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
    <Navigation navigation={navigation} />
            </>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0C2D57",
    padding: 20,
  },
  favoriteHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 23,
    height: 30,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    width: "100%"
  },
  matchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
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
  titleContainer: {
    marginTop: 44,
    width: "100%",
    justifyContent: "center",
    height: 23,
    textAlign : "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Favorites;
