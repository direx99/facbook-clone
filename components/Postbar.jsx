import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import serachIcon from "../assets/profiledp.jpg"
import galleryIcon from "../assets/gallery.png"


export default function Postbar() {
  return (
    <View>
      <View style={styles.Postbar}>
      <View style={styles.barleft}>
      <Image style={styles.profileIcon} source = {serachIcon}/>
      <Text style={styles.whatsmind}>What's on your mind ? </Text>
      </View>
      <Image style={styles.galleryIcon} source={galleryIcon}/>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Postbar:{
        flexDirection:'row',
        width:'100%',
        padding:20,
        paddingTop:0,
        alignItems:'center',
        justifyContent:'space-between'

    },
    barleft:{
        flexDirection:'row',
        alignItems:'center',

    },
    profileIcon:{
        width:42,
        height:42,
        borderRadius:50,
    },
    whatsmind:{
        marginLeft:20,
        color:'#fff',
        fontSize:16
    },
    galleryIcon:{
        width:30,
        height:30,
    },
    blackbar:{
        width:"100%",
        height:7,
        backgroundColor:'#191A1A',
        marginTop:-5,
    }

})