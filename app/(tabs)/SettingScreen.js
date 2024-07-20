import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.promoCard}>
          <Text style={styles.promoTitle}>Get Plus for Free!</Text>
          <Text style={styles.promoText}>Share your link with friends. When they sign up, you'll get 1a month of Plus for free.</Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Icon name="person-add" size={20} color="#4A90E2" />
            <Text style={styles.inviteButtonText}>Invite Friends</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.accountCard}>
          <View>
            <Text style={styles.accountName}>Megha Walia</Text>
            <Text style={styles.accountEmail}>memeghawalia@gmail.com</Text>
          </View>
          <Icon name="edit" size={20} color="#4A90E2" />
        </View>

        <Text style={styles.sectionTitle}>App Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="chat" size={20} color="#4A90E2" />
          <Text style={styles.settingText}>Chat Response Length</Text>
          <Icon name="keyboard-arrow-down" size={20} color="#4A90E2" />
        </TouchableOpacity>

        <View style={styles.themeToggle}>
          <TouchableOpacity style={styles.themeButton}>
            <Icon name="wb-sunny" size={20} color="#FFF" />
            <Text style={styles.themeButtonText}>Light</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.themeButton, styles.activeTheme]}>
            <Icon name="nights-stay" size={20} color="#FFF" />
            <Text style={styles.themeButtonText}>Dark</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.settingItem}>
          <Icon name="book" size={20} color="#4A90E2" />
          <Text style={styles.settingText}>Daily Study Reminder</Text>
          <Text style={styles.reminderTime}>2:14 PM</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Plus Membership</Text>
        <TouchableOpacity style={styles.joinButton}>
          <Icon name="diamond" size={20} color="#FFD700" />
          <Text style={styles.joinButtonText}>Join Today</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="star" size={20} color="#4A90E2" />
          <Text style={styles.settingText}>Rate Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="star" size={20} color="#4A90E2" />
          <Text style={styles.settingText}>Help Us Improve</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>More Info</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="star" size={20} color="#4A90E2" />
          <Text style={styles.settingText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Icon name="star" size={20} color="#4A90E2" />
          <Text style={styles.settingText}>Delete Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E2746',
    paddingTop: 34
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    color: '#FFF',
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C3A5A',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  deviceInfoText: {
    color: '#FFF',
    marginLeft: 5,
  },
  promoCard: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    padding: 20,
    margin: 10,
  },
  promoTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  promoText: {
    color: '#FFF',
    marginBottom: 15,
  },
  inviteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 10,
  },
  inviteButtonText: {
    color: '#4A90E2',
    marginLeft: 10,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  accountCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2C3A5A',
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  accountName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountEmail: {
    color: '#4A90E2',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C3A5A',
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  settingText: {
    color: '#FFF',
    flex: 1,
    marginLeft: 10,
  },
  themeToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C3A5A',
    borderRadius: 10,
    margin: 10,
    padding: 5,
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  activeTheme: {
    backgroundColor: '#4A90E2',
  },
  themeButtonText: {
    color: '#FFF',
    marginLeft: 5,
  },
  reminderTime: {
    color: '#4A90E2',
  },
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2C3A5A',
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  joinButtonText: {
    color: '#FFF',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#2C3A5A',
    paddingVertical: 10,
  },
  tabItem: {
    alignItems: 'center',
  },
  tabLabel: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  activeTab: {
    color: '#4A90E2',
  },
  activeTabLabel: {
    color: '#4A90E2',
  },
});

export default SettingScreen;