import type { FC } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/home/Header';
import Stories from '../../components/home/Stories';
import Post from '../../components/home/Post';
import posts from '../../utils/post';

/**
 * Home tab: header, story tray and the scrollable post feed.
 */
const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView showsVerticalScrollIndicator={false}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
