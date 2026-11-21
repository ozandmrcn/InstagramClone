import type { FC } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import stories from '../../utils/stories';
import Story from './Story';

/**
 * Horizontally scrollable tray of story rings above the home feed.
 *
 * The scroll indicator is hidden to match the native Instagram interaction.
 */
const Stories: FC = () => {
  return (
    <View style={styles.stories}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map(story => (
          <Story key={story.id} story={story} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({ stories: { paddingVertical: 10 } });
