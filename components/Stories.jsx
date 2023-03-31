import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import dp from "../assets/profiledp.jpg";
import story from "../assets/story.jpg";
import plus from "../assets/plus.png";
import data from "./data/friends.json";

export default function Stories() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <ScrollView  style={styles.storycontainer} horizontal={true} 
    showsHorizontalScrollIndicator={false}>
      <View style={styles.mystory}>
        <Image style={styles.dp} source={dp} />
        <Image style={styles.plus} source={plus} />
        <Text style={styles.createstorytxt}>Create</Text>
        <Text style={styles.createstorytxt}>Story</Text>
      </View>

      {users.map(user => ( 
         <View style={styles.friendstory}>
         <Image style={styles.storyimage} source={story} />
         <Image style={styles.smalldp} source={story} />
         <Text style={styles.friendname}>{user.name}</Text>
       </View>
      ))}

        
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mystory: {
    width: 110,
    height: 190,
    backgroundColor: "#323435",
    borderRadius: 20,
    alignItems: "center",
marginTop:15,
marginBottom:15,

marginLeft:10
  },
  storycontainer: {
    flexDirection:'row',
  },
  dp: {
    width: "100%",
    height: 120,
    flexWrap: "wrap",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  plus: {
    width: 34,
    height: 34,
    flexWrap: "wrap",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    marginTop: -15,
    marginBottom: 5,
  },
  createstorytxt: {
    color: "#fff",
    fontWeight: 500,

  },

  friendstory: {
    width: 110,
    height: 190,
    backgroundColor: "#323435",
    borderRadius: 20,
    alignItems: "center",
marginTop:15,
marginLeft:7
  },
  storyimage: {
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    borderRadius: 15,
    
  },
  friendname: {
    color :'#fff',
    fontSize:14,
    marginTop:120,
    fontWeight:700
  },
  smalldp:{
    width:40,
    height:40,
    marginTop:-180,
    borderColor:'#1A74E2',
    borderWidth:4,
    borderRadius:30,
   marginLeft:-50

  }
});
