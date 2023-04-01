import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import home from '../assets/homeactive.png'
//import data from './data/iconsdata.json'


const data = [
  { name: "home", image: require("../assets/video.png") },
  { name: "home", image: require("../assets/video.png") },
  { name: "home", image: require("../assets/video.png") },
  { name: "home", image: require("../assets/video.png") },
  { name: "home", image: require("../assets/video.png") },
  { name: "watch", image: require("../assets/homeactive.png") },
  // add more icons here
];

const Navbar = () => {


  const [icons, setIcons] = useState([]);
  const [iconImage,setIconImage]=useState("") 
  const hh = "watch"
  useEffect(() => {
    setIcons(data);
  }, []);


  return (
    <View style={styles.navbar}>

{icons.map(icon =>(
 

      <View style={styles.iconclm}>
        
         
        <Image style={styles.icon} source={icon.image}/>
        <Text style={styles.icontitile} >{icon.name}</Text>
      </View>
      
      ))}
     
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
        width:28,
        height:28
    },
    icontitile:{
      color:'#fff',
      fontSize:12,

    },
    iconclm:{
      flexDirection:'column',
      alignItems:'center',
    }
})

