import type { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AVATAR_RING_COLORS = ['#C913B9', '#F9373F', '#FECD00'];

/** Profile stats displayed next to the avatar. */
interface ProfileStat {
  id: string;
  value: string;
  label: string;
}

const stats: ProfileStat[] = [
  { id: 'posts', value: '1,425', label: 'Posts' },
  { id: 'followers', value: '1,209', label: 'Followers' },
  { id: 'following', value: '1,232', label: 'Following' },
];

/**
 * Avatar with gradient ring followed by the three profile counters.
 */
const ProfileInfo: FC = () => {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient colors={AVATAR_RING_COLORS} style={styles.cover}>
        <Image source={require('../../assets/pp.png')} style={styles.avatar} />
      </LinearGradient>

      {stats.map(stat => (
        <View key={stat.id} style={styles.stats}>
          <Text style={styles.statNumber}>{stat.value}</Text>
          <Text style={styles.statLabel}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  cover: {
    width: 85,
    height: 85,
    borderRadius: 45,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});
