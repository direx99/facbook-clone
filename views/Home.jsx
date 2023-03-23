import { View, Text } from 'react-native'
import React from 'react'
import TitleBar from '../components/TitleBar'
import Postbar from '../components/Postbar'
import Stories from '../components/Stories'

export default function Home() {
  return (
    <View>
     <TitleBar/>
     <Postbar/>
     <Stories/>
    </View>
  )
}