import type { FC, ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import type { RootTabParamList } from '../models';
import HomeScreen from '../screens/home';
import SearchScreen from '../screens/search';
import ReelScreen from '../screens/reel';
import ShopScreen from '../screens/shop';
import ProfileScreen from '../screens/profile';
import { Colors } from '../theme/color';
import { SCREENS } from '../utils/router';
import {
  Home,
  HomeField,
  Reel,
  ReelField,
  Search,
  SearchField,
  Shop,
  ShopField,
} from '../utils/Icons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TAB_ICON_SIZE = 30;

/** Props received from React Navigation for each tab bar icon. */
interface TabIconProps {
  focused: boolean;
}

/**
 * React Navigation expects a plain renderer returning a `ReactElement`.
 * React 19's `FC` also allows promises, so these adapters keep the public
 * components `FC`-typed while satisfying the navigator's callback signature.
 */
type TabBarIconRenderer = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => ReactElement;

const HomeTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? <HomeField size={TAB_ICON_SIZE} /> : <Home size={TAB_ICON_SIZE} />;

const SearchTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? (
    <SearchField size={TAB_ICON_SIZE} />
  ) : (
    <Search size={TAB_ICON_SIZE} />
  );

const ReelTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? <ReelField size={TAB_ICON_SIZE} /> : <Reel size={TAB_ICON_SIZE} />;

const ShopTabIcon: FC<TabIconProps> = ({ focused }) =>
  focused ? <ShopField size={TAB_ICON_SIZE} /> : <Shop size={TAB_ICON_SIZE} />;

/**
 * Profile tab uses the user's avatar instead of a glyph, with a ring when the
 * tab is active.
 */
const ProfileTabIcon: FC<TabIconProps> = ({ focused }) => (
  <Image
    source={require('../assets/profile.png')}
    style={[styles.avatar, focused && styles.focusedAvatar]}
  />
);

const renderHomeIcon: TabBarIconRenderer = ({ focused }) => (
  <HomeTabIcon focused={focused} />
);
const renderSearchIcon: TabBarIconRenderer = ({ focused }) => (
  <SearchTabIcon focused={focused} />
);
const renderReelIcon: TabBarIconRenderer = ({ focused }) => (
  <ReelTabIcon focused={focused} />
);
const renderShopIcon: TabBarIconRenderer = ({ focused }) => (
  <ShopTabIcon focused={focused} />
);
const renderProfileIcon: TabBarIconRenderer = ({ focused }) => (
  <ProfileTabIcon focused={focused} />
);

/**
 * Root navigator for the five primary app destinations.
 *
 * Icon renderers are declared at module scope so React Navigation receives a
 * stable component type on every render.
 */
const BottomTabsNavigation: FC = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{ tabBarIcon: renderHomeIcon }}
        name={SCREENS.HOMESCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: renderSearchIcon }}
        name={SCREENS.SEARCHSCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: renderReelIcon }}
        name={SCREENS.REELSCREEN}
        component={ReelScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: renderShopIcon }}
        name={SCREENS.SHOPSCREEN}
        component={ShopScreen}
      />
      <Tab.Screen
        options={{ tabBarIcon: renderProfileIcon }}
        name={SCREENS.PROFILESCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 25,
  },
  focusedAvatar: {
    borderColor: Colors.BLACK,
  },
});
