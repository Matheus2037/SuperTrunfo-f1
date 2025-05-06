import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { drivers } from './data/drivers.js';
import { Image } from 'react-native';

export default function App() {
  const driverID = drivers[0];

  return (
    <View style={styles.container}>
      <Text>{driverID.name}</Text>
      <Text>{driverID.description}</Text>
      <Text>{driverID.team}</Text>
      <Text>{driverID.country}</Text>
      <Text>{driverID.stars}</Text>
      <Image source={{ uri: driverID.image }} style={styles.imageSize}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageSize: {
    width: 100,
    height: 150,
  },
});
