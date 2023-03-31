import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import home from '../assets/homeactive.png'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image style={styles.icon} source={home}/>
      <Image style={styles.icon} source={home}/>
      <Image style={styles.icon} source={home}/>
      <Image style={styles.icon} source={home}/>
      <Image style={styles.icon} source={home}/>
      <Image style={styles.icon} source={home}/>


    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    navbar:{
        flexDirection:'row',
        paddingHorizontal:30,
        height:70,
        width:'100%',
        justifyContent:'space-between',
    },
    icon:{
        marginBottom:40,
        width:30,
        height:30
    }
})