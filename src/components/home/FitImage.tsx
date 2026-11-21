import type { FC } from 'react';
import { Image, StyleSheet } from 'react-native';

/** Props for a square image that fills the available container width. */
export interface FitImageProps {
  /** Absolute URL of the image to display. */
  src: string;
}

/**
 * Square media renderer for feed posts.
 *
 * `aspectRatio: 1` keeps the frame square at any viewport width without
 * measuring the window, so rotation and split-screen layouts stay correct.
 */
const FitImage: FC<FitImageProps> = ({ src }) => (
  <Image style={styles.image} source={{ uri: src }} />
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default FitImage;
