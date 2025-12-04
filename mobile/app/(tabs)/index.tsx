import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Colors, Spacing, BorderRadius, Typography } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  const [hasActiveProject, setHasActiveProject] = useState(false);

  const renderNoProject = () => (
    <View style={styles.emptyState}>
      <View style={styles.illustration}>
        <Ionicons name="rocket-outline" size={64} color={Colors.accent} />
      </View>
      <Text style={styles.emptyTitle}>Prêt à décoller ?</Text>
      <Text style={styles.emptyText}>
        Lance un nouveau projet et engage-toi pour atteindre tes objectifs !
      </Text>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => router.push('/create-project')}
      >
        <Text style={styles.buttonText}>Créer un projet</Text>
      </TouchableOpacity>
    </View>
  );

  const renderActiveProject = () => (
    <View style={styles.activeCard}>
      <View style={styles.activeHeader}>
        <View>
          <Text style={styles.projectTitle}>Apprendre le Piano</Text>
          <Text style={styles.projectSubtitle}>En cours - 50€ engagés</Text>
        </View>
        <View style={styles.progressBadge}>
          <Text style={styles.progressText}>30%</Text>
        </View>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: '30%' }]} />
      </View>
      <Text style={styles.nextTask}>Prochaine tâche : Gammes Majeures</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Bonjour, Jason 👋</Text>
        <Text style={styles.date}>Mardi 3 Décembre</Text>
      </View>

      <Text style={styles.sectionTitle}>Mon Projet Actuel</Text>
      {hasActiveProject ? renderActiveProject() : renderNoProject()}

      <Text style={styles.sectionTitle}>Statistiques</Text>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Projets terminés</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0€</Text>
          <Text style={styles.statLabel}>Engagés</Text>
        </View>
      </View>

      {/* Dev toggle */}
      <TouchableOpacity onPress={() => setHasActiveProject(!hasActiveProject)} style={{ marginTop: 20 }}>
        <Text style={{ color: Colors.textLight, textAlign: 'center' }}>(Dev: Toggle Project State)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  } as ViewStyle,
  content: {
    padding: Spacing.l,
    paddingTop: Spacing.xl * 2,
  } as ViewStyle,
  header: {
    marginBottom: Spacing.xl,
  } as ViewStyle,
  greeting: {
    ...Typography.h1,
    color: Colors.primary,
  } as TextStyle,
  date: {
    ...Typography.caption,
    marginTop: Spacing.xs,
  } as TextStyle,
  sectionTitle: {
    ...Typography.h2,
    fontSize: 20,
    marginBottom: Spacing.m,
    marginTop: Spacing.l,
  } as TextStyle,
  emptyState: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.l,
    padding: Spacing.xl,
    alignItems: 'center',
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  } as ViewStyle,
  illustration: {
    width: 120,
    height: 120,
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.round,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.m,
  } as ViewStyle,
  emptyTitle: {
    ...Typography.h2,
    marginBottom: Spacing.s,
    textAlign: 'center',
  } as TextStyle,
  emptyText: {
    ...Typography.body,
    textAlign: 'center',
    color: Colors.textLight,
    marginBottom: Spacing.l,
  } as TextStyle,
  createButton: {
    backgroundColor: Colors.secondary,
    paddingVertical: Spacing.m,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.round,
  } as ViewStyle,
  buttonText: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  } as TextStyle,
  activeCard: {
    backgroundColor: Colors.white,
    borderRadius: BorderRadius.l,
    padding: Spacing.m,
    borderLeftWidth: 6,
    borderLeftColor: Colors.secondary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  } as ViewStyle,
  activeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.m,
  } as ViewStyle,
  projectTitle: {
    ...Typography.h2,
    fontSize: 18,
  } as TextStyle,
  projectSubtitle: {
    ...Typography.caption,
  } as TextStyle,
  progressBadge: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: Spacing.s,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.s,
  } as ViewStyle,
  progressText: {
    fontWeight: 'bold',
    color: Colors.text,
    fontSize: 12,
  } as TextStyle,
  progressBarBg: {
    height: 8,
    backgroundColor: Colors.background,
    borderRadius: BorderRadius.round,
    marginBottom: Spacing.s,
  } as ViewStyle,
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.secondary,
    borderRadius: BorderRadius.round,
  } as ViewStyle,
  nextTask: {
    fontSize: 14,
    color: Colors.text,
    fontStyle: 'italic',
  } as TextStyle,
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.m,
  } as ViewStyle,
  statCard: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Spacing.m,
    borderRadius: BorderRadius.m,
    alignItems: 'center',
  } as ViewStyle,
  statValue: {
    ...Typography.h2,
    color: Colors.primary,
  } as TextStyle,
  statLabel: {
    ...Typography.caption,
  } as TextStyle,
});
