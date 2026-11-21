/**
 * Structural base required by React Navigation's generic navigator types.
 */
interface NavigationParamListBase {
  [routeName: string]: object | undefined;
}

/**
 * Route table for the bottom tab navigator.
 *
 * Every route currently has an empty param object (`undefined`). Keeping the
 * list centralized lets TypeScript reject typos in `SCREENS` and in any future
 * `navigate()` call instead of failing at runtime.
 */
interface TabRoutes {
  Home: undefined;
  Search: undefined;
  Reel: undefined;
  Shop: undefined;
  Profile: undefined;
}

/** Param list passed to `createBottomTabNavigator`. */
export interface RootTabParamList extends NavigationParamListBase, TabRoutes {}

/** Union of all valid bottom-tab route names. */
export type TabRouteName = keyof TabRoutes;
