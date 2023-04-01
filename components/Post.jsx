import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import dp from "../assets/profiledp.jpg";
import menudots from "../assets/menu-dots.png";
import cross from "../assets/cross1.png";
import earth from "../assets/earth.png";

export default function Post() {
  return (
    <View style={styles.post}>
      <View style={styles.posttopbar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.postdp} source={dp} />
          <View>
            <Text style={styles.username}>Dinith Hasaranga</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.uploadtime}>49 m •</Text>
              <Image style={styles.pricacyicon} source={earth} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.menudost} source={menudots} />
          <Image style={styles.cross} source={cross} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    padding: 15,
  },
  posttopbar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postdp: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  username: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 500,
  },
  menudost: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  cross: {
    width: 28,
    height: 28,
  },
  uploadtime: {
    marginLeft: 10,
    color: "#B7B8BF",
  },
  pricacyicon: {
    height: 12,
    width: 12,
    marginLeft: 5,
  },
});
