import type { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BurgerMenu, Dropdown, Plus } from '../../utils/Icons';

/**
 * Profile screen top bar with the username and secondary actions.
 */
const ProfileHeader: FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        <Text style={styles.userName}>username</Text>
        <Dropdown />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={30} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
