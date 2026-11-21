import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import type { Story as StoryModel } from '../../models';

/** Props for a single story ring in the horizontal tray. */
export interface StoryProps {
  /** Story data, including the seen state used for the ring treatment. */
  story: StoryModel;
}

const SEEN_RING_COLORS = ['#2B3036', '#2B3036'];
const UNSEEN_RING_COLORS = ['#C913B9', '#F9373F', '#FECD00'];

/**
 * Avatar with a gradient ring and the owner's display name.
 *
 * Seen stories get a neutral ring while unseen ones keep the brand gradient,
 * which makes new content scannable at a glance.
 */
const Story: FC<StoryProps> = ({ story }) => {
  const ringColors = story.seen ? SEEN_RING_COLORS : UNSEEN_RING_COLORS;

  return (
    <View style={styles.story}>
      <LinearGradient colors={ringColors} style={styles.cover}>
        <Image source={{ uri: story.user.avatar }} style={styles.avatar} />
      </LinearGradient>

      <Text numberOfLines={1} style={styles.userName}>
        {story.user.name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  story: {
    width: 60,
    marginHorizontal: 8,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userName: {
    fontSize: 12,
  },
});
