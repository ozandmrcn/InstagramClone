import type { FC } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { Post } from '../../models';
import ProfileHeader from '../../components/profile/ProfileHeader';
import ProfileInfo from '../../components/profile/ProfileInfo';
import ProfileBio from '../../components/profile/ProfileBio';
import ProfileStory from '../../components/profile/ProfileStory';
import posts from '../../utils/post';

/**
 * Profile tab: user details in the list header followed by a three-column post
 * grid.
 */
const ProfileScreen: FC = () => {
  const renderItem: ListRenderItem<Post> = ({ item }) => (
    <TouchableOpacity style={styles.post}>
      <Image source={{ uri: item.image }} style={styles.postImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <ProfileHeader />
            <ProfileInfo />
            <ProfileBio />
            <ProfileStory />
          </>
        }
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  post: {
    flex: 1,
    margin: 1,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
});
