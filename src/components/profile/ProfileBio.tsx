import type { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../theme/color';

/**
 * Display name, bio copy, external link and the profile edit button.
 */
const ProfileBio: FC = () => {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>Username</Text>

      <Text style={styles.description}>
        🐶 | username ✨ 🐾 Exploring the world with my adventurous paws! 🌍🐕
        📍 Parks, streets, you name it! 📩 Feel free to slide into my DMs with
        some treats 😋
      </Text>

      <Text style={styles.link}>Link goes here</Text>

      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  bio: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '700',
    color: Colors.BLACK,
  },
  description: {
    marginVertical: 5,
    color: Colors.BLACK,
  },
  link: {
    fontWeight: '400',
    color: Colors.BLUE,
  },
  editProfileButton: {
    borderColor: Colors.GRAY,
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  editProfileText: {
    fontWeight: '700',
    color: Colors.BLACK,
  },
});
