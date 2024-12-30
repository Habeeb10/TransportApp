import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";

const LocationTracker = () => {
  const watchLocation = async () => {
    // Request permissions
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    // Start watching location
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 1000, // Update every 1 second
        distanceInterval: 5, // Update if the user moves 5 meters
      },
      (location) => {
        console.log("Updated location:", location.coords);
      }
    );
  };

  useEffect(() => {
    watchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Tracking Location...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationTracker;
