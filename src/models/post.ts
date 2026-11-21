import type { User } from './user';

/**
 * A single item in the home timeline and in the profile photo grid.
 *
 * `date` is kept as the raw string returned by the mock data source so the
 * presentation layer stays responsible for any locale-specific formatting.
 */
export interface Post {
  /** Stable identifier used as a React key. */
  id: number;
  /** Full caption; the UI truncates it through the read-more component. */
  description: string;
  /** Raw timestamp string from the fixture, e.g. `2024-06-02 11:00:00`. */
  date: string;
  /** Number of likes displayed under the media. */
  likes: number;
  /** Number of comments; controls whether the comments link is rendered. */
  comments: number;
  /** Absolute URL of the post media. */
  image: string;
  /** Author of the post. */
  user: User;
}
