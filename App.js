import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './components/Navbar';
import Home from './views/Home';

export default function App() {
  return (
    <View style={styles.container}>
     <Home/>
     <View style={styles.Navbar}>
     <Navbar />
     </View>
    

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#242526',
    justifyContent:'space-between',
    paddingTop:40
  },

});
