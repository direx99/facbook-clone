import { Image, StyleSheet, Text, View  } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import serachIcon from "../assets/search.png"

export default function TitleBar() {
  return (
    <View style={styles.titleContainer}>
    <Text style={styles.fbTtitle}>facebook</Text>
    <View style={styles.iconSet}>
    <View style={styles.rightIcons}>
    <Image style={styles.iconStyle} source = {serachIcon}/>
    </View>
    <View style={styles.rightIcons}>
    <Image style={styles.iconStyle} source = {serachIcon}/>
    </View>
    </View>
        
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    padding:20,
    justifyContent: "space-between",
  },
  fbTtitle: {
    fontSize: 36,
    fontWeight:'600',
    color:'#fff'
    
  },
  rightIcons:{
    flexDirection:'column',
    alignSelf:'center',
    backgroundColor:'#3A3B3B',
    justifyContent:'center',
    height:40,
    width:40,
    borderRadius:20,
    marginLeft:10

   
  },
  iconStyle:{
    alignSelf:'center',
    height:20,
    width:20
  },
  iconSet:{
    flexDirection:'row'
    
  }


});
