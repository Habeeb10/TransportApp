Overview

This application simplifies daily commutes by allowing users to:

Track public transport in real-time.
Plan routes efficiently.
Stay updated with notifications about delays, cancellations, or nearby stops.
Access routes and schedules offline.
Features

Track Public Transport: View real-time locations of buses and trains on an interactive map.
Plan Routes: Get suggestions for the best routes based on start and end points.
Receive Notifications: Alerts for any delays, cancellations, or nearby stops.
Offline Support: Access schedules and routes even without an internet connection.


Technical Stack

Frontend: React Native (TypeScript)
State Management: Redux Toolkit and RTK Query
Backend Integration: REST APIs and WebSocket
Mapping and Geolocation: Mapbox SDK
Offline Storage: SQLite
Development Tools: Expo for prototyping and custom native module integration
Architecture and Design

1. Modular Component Design
Each feature is implemented as a reusable and maintainable component.

2. State Management
Managed globally using Redux Toolkit, with RTK Query for efficient API integrations.

3. Real-Time Updates
Powered by WebSocket to ensure timely updates of public transport data.

4. Offline Support
SQLite is used to store schedules and routes for offline access.

5. Scalable Navigation
React Navigation is configured to support dynamic and nested routes.

6. Mapping and Geolocation
Mapbox SDK is integrated for interactive maps, real-time tracking, and geolocation services.

Getting Started

Follow these instructions to set up and run the project locally.

Prerequisites
Node.js (>=14.x)
Yarn or npm
Expo CLI
Mapbox Account and Access Token


# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
