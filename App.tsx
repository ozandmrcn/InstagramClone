import type { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigation from './src/router/bottomTabsNavigation';

/**
 * Root component of the application.
 *
 * The navigation container owns the app-level navigation state; the bottom tab
 * navigator below it defines the five primary destinations.
 */
const App: FC = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigation />
    </NavigationContainer>
  );
};

export default App;
