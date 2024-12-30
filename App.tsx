// import React, { useEffect } from "react";
// import * as Notifications from "expo-notifications";
// import { AppNavigator } from "@/src/navigation";
// import { NavigationContainer } from "@react-navigation/native";
// import LocationTracker from "./src/components/location";
// import { Provider } from "react-redux";
// import store from "./src/store/index";
// const App = () => {
//   useEffect(() => {
//     const requestPermissions = async () => {
//       const { status } = await Notifications.requestPermissionsAsync();
//       if (status !== "granted") {
//         console.error("Notification permissions not granted!");
//       }
//     };

//     requestPermissions();
//   }, []);

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <AppNavigator />
//         <LocationTracker />
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;
