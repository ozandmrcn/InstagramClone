# InstagramClone

A portfolio-focused **Instagram UI clone** built with **React Native**, **TypeScript**, and **React Navigation**. It recreates the core mobile layout — a story tray, a scrollable post feed and a profile grid — with a fully typed component and data layer. The app is frontend-only: posts and stories come from local mock fixtures, so no backend or credentials are required.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Bullseye.png" alt="Bullseye" width="25" height="25" /> Project Overview

InstagramClone currently provides:

- **Five-tab navigation:** Home, Search, Reel, Shop and Profile through a bottom tab navigator.
- **Home feed:** a horizontal story tray with seen/unseen rings followed by post cards with square media, captions, likes and comment counts.
- **Profile screen:** a gradient-ring avatar, stats, bio, saved highlights and a three-column post grid.
- **Placeholder tabs:** Search, Reel and Shop are intentionally minimal and ready for future features.
- **Local mock data:** typed fixtures in `src/utils` stand in for an API, so the UI can be explored offline (remote images still need an internet connection).

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Hammer and Wrench" width="25" height="25" /> Features

- **Typed domain models:** `src/models` centralizes `User`, `Post`, `Story` and navigation contracts, so fixtures and components share one source of truth.
- **Consistent component API:** every component and icon is typed as `FC` / `FC<Props>` with explicit prop interfaces.
- **Type-safe routes:** `SCREENS` constants are checked against `RootTabParamList`, catching route typos at compile time.
- **Reusable icon set:** PNG-based icons live in `src/utils/Icons.tsx` behind a shared `IconProps` contract.
- **Centralized colors:** palette values are declared once in `src/theme/color.ts` and consumed as typed tokens.
- **Safe-area aware layout:** screens use `react-native-safe-area-context` to respect notches and status bars.
- **Developer checks:** TypeScript, ESLint, Prettier and a Jest smoke test are configured out of the box.
- **Ready-made launcher icons:** Android, iOS and web app icons are included in [`AppIcons/`](./AppIcons).

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" /> Technologies Used

- **React Native** 0.88.1 (Mobile framework)
- **React** 19.3.0 (UI library)
- **TypeScript** 6.0.3 (Language)
- **React Navigation** — `@react-navigation/native` and `@react-navigation/bottom-tabs`
- **react-native-safe-area-context** and **react-native-screens** (Native layout)
- **react-native-linear-gradient** (Story and profile rings)
- **@fawazahmed/react-native-read-more** (Expandable captions)
- **Jest** and **react-test-renderer** (Testing)
- **ESLint** and **Prettier** (Linting and formatting)

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" alt="Gear" width="25" height="25" /> Setup & Installation

You need **Node.js >= 22.11.0** and a working React Native environment (Android Studio / an emulator, or Xcode / a simulator on macOS).

```bash
# Clone the repository
git clone https://github.com/ozandmrcn/InstagramClone.git

# Navigate into the project folder
cd InstagramClone

# Install dependencies
npm install

# Start Metro in one terminal
npm start

# In another terminal, launch a platform
npm run android   # Android emulator / device
npm run ios       # iOS simulator (macOS only)
```

> ℹ️ **Note:** This project has no environment variables or `.env` file — all data is local mock data. Post and avatar images are loaded from public URLs, so an internet connection is needed to see them.

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Key.png" alt="Key" width="25" height="25" /> Scripts

| Script              | Description                               |
| ------------------- | ----------------------------------------- |
| `npm start`         | Start the Metro bundler                   |
| `npm run android`   | Build and run the app on Android          |
| `npm run ios`       | Build and run the app on iOS (macOS only) |
| `npm run typecheck` | Run TypeScript without emitting output    |
| `npm run lint`      | Run ESLint across the project             |
| `npm test`          | Run the Jest smoke test                   |

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Desktop%20Computer.png" alt="Desktop Computer" width="25" height="25" /> Project Structure

```text
InstagramClone
├── AppIcons/               # Ready-to-use launcher icons (Android, iOS, web)
├── __tests__/              # Jest smoke test
├── src/
│   ├── assets/             # PNG assets used by the UI
│   ├── components/
│   │   ├── home/           # Header, Stories, Story, Post, FitImage
│   │   └── profile/        # Header, Info, Bio, Story
│   ├── models/             # User, Post, Story and navigation types (+ barrel export)
│   ├── router/             # Bottom tab navigator
│   ├── screens/
│   │   ├── home/
│   │   ├── search/
│   │   ├── reel/
│   │   ├── shop/
│   │   └── profile/
│   ├── theme/              # Color tokens
│   └── utils/              # Mock fixtures, icon set, route constants
├── App.tsx                 # Root component with NavigationContainer
├── index.ts                # React Native entry point
└── README.md
```

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" /> Preview

<img alt="Home feed" src="REPLACE_WITH_HOME_GIF" />
<img alt="Profile" src="REPLACE_WITH_PROFILE_GIF" />

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Key.png" alt="Key" width="25" height="25" /> App Icons

![Animation1.gif](../Animation1.gif)
Ready-to-use app icons are available in the [`AppIcons/`](./AppIcons) folder — feel free to use them for your own build:

- `AppIcons/android/` — launcher icons for every density, plus adaptive and monochrome variants.
- `AppIcons/ios/` — the complete `AppIcon` set with `Contents.json`.
- `AppIcons/web/` — favicon, Apple touch icon and 192/512 px PWA icons (including maskable variants).

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png" alt="Light Bulb" width="25" height="25" /> Notes

- `src/utils/post.ts` and `src/utils/stories.ts` are typed mock fixtures; swap them for API calls when adding a backend.
- Search, Reel and Shop are placeholder screens by design, not unfinished routes.
- The Jest smoke test mocks `react-native-read-more` because its layout timers outlive a render-only test.

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Gear.png" alt="Gear" width="25" height="25" /> License

Released under the [MIT License](./LICENSE).

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/E-Mail.png" alt="E-Mail" width="25" height="25" /> Contact

For any questions or feedback, feel free to contact:  
**Ozan Demircan** – [ozandmrcn47@gmail.com](mailto:ozandmrcn47@gmail.com)
