module.exports = {
  preset: '@react-native/jest-preset',
  // Dependencies below ship untransformed sources (JSX, ESM or PNG imports).
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-native-linear-gradient|@fawazahmed)/)',
  ],
};
