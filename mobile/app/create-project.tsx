import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ViewStyle, TextStyle } from 'react-native';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CreateProjectScreen() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // Create project
      console.log('Create project', { title, budget });
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nouveau Projet</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.progressContainer}>
        <View style={[styles.progressStep, step >= 1 && styles.activeStep]} />
        <View style={[styles.progressStep, step >= 2 && styles.activeStep]} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {step === 1 ? (
          <>
            <Text style={styles.question}>Quel est ton objectif ?</Text>
            <Text style={styles.hint}>Donne un nom inspirant à ton projet.</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Courir un marathon, Apprendre l'anglais..."
              placeholderTextColor={Colors.textLight}
              value={title}
              onChangeText={setTitle}
              autoFocus
            />
          </>
        ) : (
          <>
            <Text style={styles.question}>Combien veux-tu engager ?</Text>
            <Text style={styles.hint}>C'est la somme que tu t'engages à verser si tu échoues.</Text>
            <View style={styles.currencyInputContainer}>
              <TextInput
                style={styles.currencyInput}
                placeholder="0"
                placeholderTextColor={Colors.textLight}
                value={budget}
                onChangeText={setBudget}
                keyboardType="numeric"
                autoFocus
              />
              <Text style={styles.currencySymbol}>€</Text>
            </View>
          </>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.button, (!title && step === 1) && styles.disabledButton]}
          onPress={handleNext}
          disabled={!title && step === 1}
        >
          <Text style={styles.buttonText}>
            {step === 1 ? 'Continuer' : "C'est parti !"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.m,
    paddingTop: Spacing.xl * 1.5, // Status bar safe area rough approx
    paddingBottom: Spacing.m,
  } as ViewStyle,
  backButton: {
    padding: Spacing.s,
  } as ViewStyle,
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  } as TextStyle,
  progressContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.l,
    gap: Spacing.s,
    marginBottom: Spacing.l,
  } as ViewStyle,
  progressStep: {
    flex: 1,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  } as ViewStyle,
  activeStep: {
    backgroundColor: Colors.secondary,
  } as ViewStyle,
  content: {
    padding: Spacing.l,
  } as ViewStyle,
  question: {
    ...Typography.h1,
    marginBottom: Spacing.s,
    color: Colors.primary,
  } as TextStyle,
  hint: {
    ...Typography.body,
    color: Colors.textLight,
    marginBottom: Spacing.xl,
  } as TextStyle,
  input: {
    backgroundColor: Colors.white,
    padding: Spacing.m,
    borderRadius: BorderRadius.m,
    fontSize: 18,
    color: Colors.text,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  } as TextStyle,
  currencyInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  currencyInput: {
    fontSize: 64,
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    minWidth: 100,
  } as TextStyle,
  currencySymbol: {
    fontSize: 64,
    fontWeight: 'bold',
    color: Colors.textLight,
  } as TextStyle,
  footer: {
    padding: Spacing.l,
    paddingBottom: Spacing.xl,
  } as ViewStyle,
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.m,
    borderRadius: BorderRadius.round,
    alignItems: 'center',
  } as ViewStyle,
  disabledButton: {
    opacity: 0.5,
  } as ViewStyle,
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  } as TextStyle,
});
