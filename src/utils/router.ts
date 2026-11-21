import type { TabRouteName } from '../models';

/**
 * Canonical route names used by the bottom tab navigator.
 *
 * The `satisfies` check guarantees that every constant stays in sync with
 * `RootTabParamList` while preserving the literal value of each name.
 */
export const SCREENS = {
  HOMESCREEN: 'Home',
  SEARCHSCREEN: 'Search',
  REELSCREEN: 'Reel',
  SHOPSCREEN: 'Shop',
  PROFILESCREEN: 'Profile',
} as const satisfies Record<string, TabRouteName>;
