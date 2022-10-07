import React from 'react';
import { StyleSheet, View } from 'react-native';

/**
 * Floating action button might cover some of the card buttons in long lists.
 * This spacer to allows for some over scrolling in ScrollViews
 * */
export const ScrollBottomBuffer: React.FC = () => <View style={styles.heightBuffer} />;

const styles = StyleSheet.create({
  heightBuffer: {
    height: 80,
  },
});
