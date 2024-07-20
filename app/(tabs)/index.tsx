import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey Spencer, what's on your agenda for the rest of the day?", sender: 'ai' }
  ]);
  const [selectedValue, setSelectedValue] = useState('guide');
  const [loading, setLoading] = useState(false);

  const getMessage = () => {
    return fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        "model": "openai/gpt-3.5-turbo",
        "messages": [
          {"role": "user", "content": input}
        ]
      })
    })
    .then(response => response.json()) 
    .then(data => {
      console.log("data.choices[0].message.content",data.choices[0].message.content)
      if (input.trim()) {
        // Add user message
        setMessages(prevMessages => [...prevMessages, { id: Date.now(), text: input.trim(), sender: 'user' }]);
        setInput('');
        
        // AI response
        setTimeout(() => {
          setMessages(prevMessages => [...prevMessages, { 
            id: Date.now() + 1, 
            text: data.choices[0].message.content, 
            sender: 'ai' 
          }]);
        }, 1000);
      }
    })
    .catch(error => {
      console.error('Error fetching messages:', error);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Help Us Improve Bible Chat</Text>
      </View>
      <View style={styles.guideContainer}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          mode='dropdown'
          itemStyle={styles.pickerItem} 
        >
          <Picker.Item label="Guide" value="guide" />
          <Picker.Item label="Friend" value="Friend" />
          <Picker.Item label="Therapist" value="Therapist" />
          <Picker.Item label="Scholar" value="Scholar" />
        </Picker>
      </View>
      <ScrollView style={styles.messagesContainer}>
        {messages.map(message => (
          <View key={message.id} style={[
            styles.messageContainer,
            message.sender === 'user' ? styles.userMessage : styles.aiMessage
          ]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
      >
        <TextInput 
          style={styles.input} 
          value={input}
          onChangeText={setInput}
          placeholder="Ask me anything..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendButton} onPress={() => {
          setLoading(true);
          getMessage().finally(() => setLoading(false));
        }}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.sendButtonText}>▶</Text>
          )}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2030',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  guideContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '25%',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 5,
  },
  guideText: {
    color: 'white',
    backgroundColor: '#2c3e50',
    padding: 10,
    borderRadius: 20,
  },
  messagesContainer: {
    flex: 1,
  },
  messageContainer: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3498db',
  },
  aiMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#34495e',
  },
  messageText: {
    color: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#34495e',
    color: 'white',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#3498db',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 18,
  },
  picker: {
    height: 50,
    width: 150,
    color: 'white',
    left: '60%',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor:'#34495e',
  },
  pickerItem: {
    color: 'red',  
    fontSize: 16,   
    backgroundColor: '#2c3e50', 
  },
});