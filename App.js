import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TouchableHighlight, Button, Alert} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello React Native </Text>
      <TouchableHighlight>
      <Image
      source = {{
        width:200,
        height:300,
        uri : "https://picsum.photos/200/300",
      }}
      />
       </TouchableHighlight>
       <Button title = "Click me"
        onPress = {() => Alert.alert("This is an alert", "Giggity Giggity 50's Giggity", [
        {text : "Yes", onPress: () => console.log("Yes")},
        {text : "No", onPress: () => console.log("No")}, 
        {text : "Giggity", onPress: () => console.log("Giggity Giggity 50's Giggity")
      }])}
       
       
       />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
