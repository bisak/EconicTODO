import { StyleSheet, Text } from 'react-native';
import React from 'react';

type CompletedStatsProps = {
  completed: number;
  total: number;
};

export const CompletedStats: React.FC<CompletedStatsProps> = ({ total, completed }) => {
  return (
    <Text style={styles.statsText}>
      Completed {completed} of {total}
    </Text>
  );
};

const styles = StyleSheet.create({
  statsText: {
    textAlign: 'right',
    marginHorizontal: 20,
    padding: 4,
  },
});
