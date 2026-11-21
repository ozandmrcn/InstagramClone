/**
 * Minimal public profile shape shared by feed posts and stories.
 *
 * The mock API only exposes a display name and an avatar URL, so we keep the
 * model intentionally small and extend it when a real backend is introduced.
 */
export interface User {
  /** Display name rendered under avatars and next to post content. */
  name: string;
  /** Absolute URL of the profile picture. */
  avatar: string;
}
