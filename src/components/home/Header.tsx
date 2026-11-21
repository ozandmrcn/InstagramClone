import type { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Logo, Plus, Heart, Messenger } from '../../utils/Icons';
import { Colors } from '../../theme/color';

const { RED, WHITE } = Colors;

/**
 * Home screen top bar.
 *
 * Action buttons are currently visual placeholders; they keep the layout
 * faithful to the reference UI until interaction handlers are wired up.
 */
const Header: FC = () => {
  return (
    <View style={styles.header}>
      <Logo />

      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>

          <Heart size={24} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>

          <Messenger size={24} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <Plus size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    height: 45,
    alignItems: 'center',
    paddingBottom: 4,
  },
  actions: { flexDirection: 'row', gap: 30 },
  dotContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
    width: 11,
    height: 11,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  dot: {
    backgroundColor: RED,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
});
