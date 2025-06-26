import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Maria Eduarda</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Sobre Mim</Text>
          <Text style={styles.sectionContent}>
            Estudante de Ciência da Computação dedicada, apaixonada por tecnologia e com forte capacidade de aprendizado. Busco constantemente aprimorar minhas habilidades e entregar soluções inovadoras e de alta qualidade.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Soft Skills</Text>
          <View style={styles.skillsList}>
            <Text style={styles.skillItem}>• Colaboração</Text>
            <Text style={styles.skillItem}>• Comunicação</Text>
            <Text style={styles.skillItem}>• Resolução de Problemas</Text>
              <Text style={styles.skillItem}>• Trabalho em Equipe</Text>
            <Text style={styles.skillItem}>• Adaptabilidade</Text>
            <Text style={styles.skillItem}>• Proatividade</Text>
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hard Skills</Text>
          <View style={styles.skillsList}>
            <Text style={styles.skillItem}>• JavaScript</Text>
            <Text style={styles.skillItem}>• Python</Text>
            <Text style={styles.skillItem}>• React Native</Text>
            <Text style={styles.skillItem}>• HTML</Text>
            <Text style={styles.skillItem}>• CSS</Text>
            <Text style={styles.skillItem}>• Controle de Versão (Git & GitHub)</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a202c',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#93c5fd',
    marginBottom: 8,
  },
  sectionContainer: {
    backgroundColor: '#2d3748',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#e2e8f0',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#3b82f6',
  },
  skillsList: {
    marginTop: 5,
  },
  sectionContent: {
    fontSize: 18,
    color: '#a0aec0',
    lineHeight: 26,
  },
  skillItem: {
    fontSize: 18,
    color: '#a0aec0',
    marginBottom: 8,
    marginLeft: 8,
  },
});