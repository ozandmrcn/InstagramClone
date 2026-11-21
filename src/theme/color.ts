/**
 * Central color palette for the app.
 *
 * `as const` keeps the values as literal types so design tokens cannot be
 * swapped for arbitrary strings by accident, and `AppColors` can be reused in
 * styled helpers without duplicating the object shape.
 */
export const Colors = {
  RED: '#FE0135',
  WHITE: '#FFF',
  BLACK: '#000',
  GRAY: '#C4C4C4',
  BLUE: '#0095F6',
  GRAY2: '#DBDBDB',
} as const;

/** Literal type of the exported palette. */
export type AppColors = typeof Colors;
