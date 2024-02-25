

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import axios from 'axios';
import Navigation from '../components/Navigation';

const MatchDetail = ({ navigation, route }) => {
  const { matchId } = route.params;
  const [match, setMatch] = useState([]);

  useEffect(() => {
    const fetchMatch = async () => {
      try {
        const uri = `https://api.sportmonks.com/v3/football/fixtures/${matchId}?include=league;participants;venue;season`;
        const response = await axios.get(uri, {
          headers: {
            'Authorization': 'hRUrsgLPx1hOtaduIEtebzydO5DGGnEpBgwmM4twAKBWMZHpYmcPWDW9ZGrX'
          }
        });
        setMatch(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMatch();
  }, []);

  if (match.length === 0) {
    return <Text style={styles.loadingContainer} >Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Match Details</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.matchImage}
          resizeMode="cover"
          source={{ uri: match?.venue?.image_path ? match.venue.image_path : 'https://images.pexels.com/photos/41257/pexels-photo-41257.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        />
      </View>
      
      <View style={styles.teamNamesContainer}>
        <Text style={styles.teamNames}>{match?.participants[0].name || ''}  VS {match?.participants[1].name || ''}</Text>
      </View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.dateTimeLabel}>Date & Time</Text>
        <Text style={styles.dateTimeText}>{match?.starting_at || ''}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.leagueLabel}>Leagues</Text>
        <Text style={styles.leagueText}>{match?.league?.name || ''}</Text>
      </View>
      <View style={styles.seasonContainer}>
        <Text style={styles.seasonLabel}>Season</Text>
        <Text style={styles.seasonText}>{match?.season?.name || ''}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Result</Text>
        <Text style={styles.resultText}>{match.result_info || ''}</Text>
      </View>
      <View style={styles.teamLogosContainer}>
        <Image style={styles.teamLogo} resizeMode="cover" source={{ uri: match.participants[0].image_path }} />
        <Text style={styles.vsText}>VS</Text>
        <Image style={styles.teamLogo} resizeMode="cover" source={{ uri: match.participants[1].image_path }} />
      </View>
      <Navigation navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({

  loadingContainer:{
   height: "100%",
   justifyContent : "center",
   alignItems : "center"
   
  },
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0d171c',
    textAlign : "center",
    marginTop : 30,

  },
  imageContainer: {
    height: 218,
    width: '100%',
  },
  matchImage: {
    height: '100%',
    width: '100%',

  },

  teamNamesContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent : "center",
    height: 72,
        width: "100%",
        backgroundColor:  "#DCF2F1",
        borderRadius : 20,
    
  },
  teamNames: {
    fontSize: 22,
    textAlign: "center",
        fontFamily: "Lexend-Bold",
        fontWeight: "700",
        letterSpacing: 0,
        color:  "#0d171c",
  },
  dateTimeContainer: {
    paddingHorizontal: 16,
    
  },
  dateTimeLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0d171c',
  },
  dateTimeText: {
    color: '#4d7a99',
  },
  leagueContainer: {
    paddingHorizontal: 16,
    
  },
  leagueLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0d171c',
  },
  leagueText: {
    color: '#4d7a99',
  },
  seasonContainer: {
    paddingHorizontal: 16,
  },
  seasonLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0d171c',
  },
  seasonText: {
    color: '#4d7a99',
  },
  resultContainer: {
    paddingHorizontal: 16,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0d171c',
  },
  resultText: {
    color: '#4d7a99',
  },
  teamLogosContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  teamLogo: {
    height: 90,
    width: 90,
    borderRadius: 20,
  },
  vsText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0d171c',
    marginHorizontal: 20,
  },
});

export default MatchDetail;

