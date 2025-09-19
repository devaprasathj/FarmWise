import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import { LanguageProvider } from './src/context/LanguageContext'; // Import the provider

const App = () => {
  return (
    // Wrap your app with the LanguageProvider
    <LanguageProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#0D1117" />
        <HomeScreen />
      </SafeAreaView>
    </LanguageProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
});

export default App;