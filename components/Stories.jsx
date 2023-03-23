import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import dp from "../assets/profiledp.jpg";
import plus from "../assets/plus.png";
import data from "./data/friends.json";

export default function Stories() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <View style={styles.storycontainer}>
      <View style={styles.mystory}>
        <Image style={styles.dp} source={dp} />
        <Image style={styles.plus} source={plus} />
        <Text style={styles.createstorytxt}>Create</Text>
        <Text style={styles.createstorytxt}>Story</Text>
      </View>

      <View>
        <View style={styles.mystory}>
          <Image style={styles.dp} source={dp} />
          <Image style={styles.plus} source={plus} />
          <Text style={styles.createstorytxt}>Create</Text>
          <Text style={styles.createstorytxt}>Story</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mystory: {
    width: 110,
    height: 190,
    backgroundColor: "#323435",
    borderRadius: 20,
    alignItems: "center",
    margin:10,
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
});
