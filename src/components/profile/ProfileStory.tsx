import type { FC } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from '../../theme/color';

/** A single saved highlight card in the profile story tray. */
interface ProfileHighlight {
  id: number;
  image: string;
  emoji: string;
}

const highlights: ProfileHighlight[] = [
  { id: 1, image: 'https://picsum.photos/1080/607?random=1', emoji: '🐶' },
  { id: 2, image: 'https://picsum.photos/1080/607?random=2', emoji: '🐯' },
  { id: 3, image: 'https://picsum.photos/1080/607?random=3', emoji: '🦊' },
  { id: 4, image: 'https://picsum.photos/1080/607?random=4', emoji: '🐣' },
];

/**
 * Horizontally scrollable highlight tray on the profile screen.
 *
 * The trailing tile is the "new story" affordance and is rendered separately
 * because it has no media or caption yet.
 */
const ProfileStory: FC = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}
    >
      {highlights.map(highlight => (
        <View key={highlight.id} style={styles.story}>
          <View style={styles.cover}>
            <Image
              source={{ uri: highlight.image }}
              style={styles.storyImage}
            />
          </View>
          <Text>{highlight.emoji}</Text>
        </View>
      ))}

      <View style={styles.story}>
        <View style={styles.cover}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  cover: {
    borderColor: Colors.GRAY2,
    borderWidth: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  newStoryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusSign: {
    fontSize: 20,
  },
});
