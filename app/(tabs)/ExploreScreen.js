import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native';

const ExploreScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.title}>Explore</Text>
      
      <DevotionalCard />
      
      <CategoryButton icon="👤" text="Forgiveness & Grace" />
      <CategoryButton icon="👤" text="Love & Relationships" />
      <CategoryButton icon="👤" text="What Would Jesus Do" />
      <CategoryButton icon="👤" text="Faith and Doubt" />
      <CategoryButton icon="👤" text="Quiz Me" />
      <CategoryButton icon="👤" text="Random" />
      <CategoryButton icon="👤" text="Heal My Pain" />
      <CategoryButton icon="👤" text="Calm My Anxiety" />
      <CategoryButton icon="👤" text="Create Your Own Prayer" />

    </ScrollView>
  );
};

const DevotionalCard = () => (
  <View style={styles.devotionalCard}>
    <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.seeDevotionalButton}>
        <Text style={{color:'#fff',fontSize: 12}}>See Devotional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareButton}>
        <Text>Share</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.verse}>
      But when they saw him walking on the lake, they thought he was a ghost. They cried out, because they all saw him and were terrified. Immediately he spoke to them and said, "Take courage! It is I. Don't be afraid."
    </Text>
    <Text style={styles.reference}>Mark 6:49-50 NIV</Text>
  </View>
);

const CategoryButton = ({ icon, text }) => (
  <TouchableOpacity style={styles.categoryButton}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2746',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    paddingTop: 40,
    textAlign: 'center'
  },
  devotionalCard: {
    backgroundColor: '#4a90e2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  seeDevotionalButton: {
    backgroundColor: '#1e2746',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  shareButton: {
    padding: 5,
  },
  verse: {
    color: '#fff',
    marginBottom: 10,
  },
  reference: {
    color: '#fff',
    textAlign: 'right',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    height: 100
  },
  icon: {
    marginRight: 15,
    fontSize: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1e2746',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
  },
  activeNavButton: {
    borderTopWidth: 2,
    borderTopColor: '#4a90e2',
  },
});

export default ExploreScreen;