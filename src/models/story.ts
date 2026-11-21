import type { User } from './user';

/**
 * A story ring in the horizontal tray above the home feed.
 *
 * `seen` drives the ring treatment: seen stories use a neutral gray ring,
 * while unseen ones keep the brand gradient to signal new content.
 */
export interface Story {
  /** Stable identifier used as a React key. */
  id: number;
  /** Owner of the story. */
  user: User;
  /** Whether the current user has already viewed this story. */
  seen: boolean;
}
