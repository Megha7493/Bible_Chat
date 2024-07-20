import { Tabs } from 'expo-router';
import React from 'react';
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3498db',
        tabBarStyle: { backgroundColor: '#1E2746', borderTopWidth: 0, paddingVertical: 5, paddingBottom: 1 },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Entypo size={28} name="chat" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ExploreScreen"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="explore" color={color} />,
        }}
      />
      <Tabs.Screen
        name="SavedScreen"
        options={{
          title: 'Saved',
          tabBarIcon: ({ color }) => <Entypo size={28} name="save" color={color} />,
        }}
      />
      <Tabs.Screen
        name="SettingScreen"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
}
