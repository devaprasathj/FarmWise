import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LanguageContext } from '../context/LanguageContext'; // Make sure this is imported

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  // This line gets the data from the context
  const { translations, changeLanguage } = useContext(LanguageContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          {/* This text uses the translation object */}
          <Text style={styles.logo}>{translations.logo}</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => setModalVisible(true)}>
            {/* This text uses the translation object */}
            <Text style={styles.loginButtonText}>{translations.loginButton}</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.hero}>
          {/* This text uses the translation object */}
          <Text style={styles.heroSubtitle}>{translations.heroSubtitle}</Text>
          {/* This text uses the translation object */}
          <Text style={styles.heroTitle}>{translations.heroTitle}</Text>
        </View>
        
        {/* Language Selector Buttons */}
        <View style={styles.langSelectorContainer}>
          {/* This button calls the changeLanguage function */}
          <TouchableOpacity style={styles.langButton} onPress={() => changeLanguage('en')}>
            <Text style={styles.langButtonText}>English</Text>
          </TouchableOpacity>
          {/* This button calls the changeLanguage function */}
          <TouchableOpacity style={styles.langButton} onPress={() => changeLanguage('ta')}>
            <Text style={styles.langButtonText}>தமிழ்</Text>
          </TouchableOpacity>
          {/* This button calls the changeLanguage function */}
          <TouchableOpacity style={styles.langButton} onPress={() => changeLanguage('ml')}>
            <Text style={styles.langButtonText}>മലയാളം</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
      {/* ... your modal and other components ... */}
    </View>
  );
};

// Add your styles here
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1117' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#161b22' },
  logo: { color: '#2ECC71', fontSize: 24, fontWeight: 'bold' },
  loginButton: { backgroundColor: '#238636', paddingVertical: 8, paddingHorizontal: 20, borderRadius: 50 },
  loginButtonText: { color: '#FFFFFF', fontWeight: 'bold' },
  hero: { padding: 40, alignItems: 'center' },
  heroSubtitle: { color: '#8b949e', fontSize: 12, fontWeight: 'bold', textAlign: 'center' },
  heroTitle: { color: '#FFFFFF', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  langSelectorContainer: { flexDirection: 'row', justifyContent: 'center', padding: 20, gap: 15 },
  langButton: { borderWidth: 1, borderColor: '#2ECC71', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 5 },
  langButtonText: { color: '#2ECC71' },
});

export default HomeScreen;