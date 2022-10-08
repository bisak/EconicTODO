import React from 'react';
import { StyleSheet, View } from 'react-native';

type ScrollBottomBufferProps = {
  testID?: string;
};

export enum ScrollBottomBufferTestID {
  ViewID = 'ViewID',
}

/**
 * Floating action button might cover some of the card action buttons in long lists.
 * This spacer to allows for some over scrolling in ScrollViews
 * */
export const ScrollBottomBuffer: React.FC<ScrollBottomBufferProps> = ({ testID = ScrollBottomBufferTestID.ViewID }) => (
  <View testID={testID} style={styles.heightBuffer} />
);

const styles = StyleSheet.create({
  heightBuffer: {
    height: 80,
  },
});
