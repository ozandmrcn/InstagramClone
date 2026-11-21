import type { FC } from 'react';
import { Text, View } from 'react-native';

/**
 * Placeholder for the Search tab.
 *
 * The tab exists so the bottom navigation matches the reference app; the
 * search experience will be implemented in a separate feature.
 */
const SearchScreen: FC = () => {
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
