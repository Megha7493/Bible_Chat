import React from 'react';
import { Text, StyleSheet, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SavedScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Saved Messages</Text>
      <Image
        style={styles.tinyLogo}
        source={require('@/assets/images/book.jpg')}
      />
      <Text style={styles.headerTitleTxt}>No Saved Messages</Text>
      <Text style={styles.normalTxt}>Click the "Save" icon on message to see it here</Text>
      <Button title='Go to Chat'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2030',
    alignItems:'center',
    top: 40,
  },
  headerText: {
    color: "#5882FB",
    fontSize: 20,
    fontWeight: "bold"
  },
  tinyLogo: {
    height: 180,
    width: 180,
    borderRadius: 100,
    marginVertical: 70
  },
  headerTitleTxt: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  normalTxt: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 70,
    width: '60%',
    textAlign: 'center'
  }
});