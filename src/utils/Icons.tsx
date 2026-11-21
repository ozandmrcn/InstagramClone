import type { FC } from 'react';
import { Image, StyleSheet } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

/**
 * Props for icons whose dimensions are decided by the caller.
 */
export interface IconProps {
  /** Rendered width and height in density-independent pixels. */
  size: number;
}

interface AssetIconProps extends IconProps {
  source: ImageSourcePropType;
}

/**
 * Shared primitive for scaled PNG icons.
 *
 * Registered styles cannot describe an arbitrary runtime size, so this is the
 * single place in the icon set where a dynamic dimension object is required.
 */
const AssetIcon: FC<AssetIconProps> = ({ size, source }) => (
  <Image style={{ width: size, height: size }} source={source} />
);

/** Instagram wordmark displayed in the home header. */
const Logo: FC = () => <Image source={require('../assets/logo.png')} />;

const Home: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/home.png')} />
);

const HomeField: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/home-field.png')} />
);

const Search: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/search.png')} />
);

const SearchField: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/search-field.png')} />
);

const Reel: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/reel.png')} />
);

const ReelField: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/reel-field.png')} />
);

const Shop: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/shop.png')} />
);

const ShopField: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/shop-field.png')} />
);

const Plus: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/plus.png')} />
);

const Heart: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/heart.png')} />
);

const Messenger: FC<IconProps> = ({ size }) => (
  <AssetIcon size={size} source={require('../assets/messenger.png')} />
);

/** Horizontal three-dot overflow glyph. */
const Dots: FC = () => (
  <Image style={styles.dots} source={require('../assets/more.png')} />
);

/** Save/bookmark action glyph. */
const Bookmark: FC = () => (
  <Image style={styles.actionIcon} source={require('../assets/bookmark.png')} />
);

/** Comment action glyph. */
const Comment: FC = () => (
  <Image style={styles.actionIcon} source={require('../assets/comment.png')} />
);

/** Share action glyph. */
const Share: FC = () => (
  <Image style={styles.actionIcon} source={require('../assets/share.png')} />
);

/** Chevron shown next to the profile username. */
const Dropdown: FC = () => (
  <Image style={styles.actionIcon} source={require('../assets/dropdown.png')} />
);

/** Hamburger menu shown in the profile header. */
const BurgerMenu: FC = () => (
  <Image style={styles.actionIcon} source={require('../assets/burger.png')} />
);

const styles = StyleSheet.create({
  dots: { width: 15, height: 3 },
  actionIcon: { width: 24, height: 24 },
});

export {
  Logo,
  Home,
  HomeField,
  Search,
  SearchField,
  Reel,
  ReelField,
  Shop,
  ShopField,
  Plus,
  Heart,
  Messenger,
  Dots,
  Bookmark,
  Comment,
  Share,
  Dropdown,
  BurgerMenu,
};
