import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location"; // Expo Location API
import { setLocation, setDestinations } from "../store/slice/locationSlice"; // Import actions

const useLocation = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const location = useSelector(
    (state: any) => state?.location?.location || null
  ); // Safeguard against undefined state
  const destinations = useSelector(
    (state: any) => state?.location?.destinations || []
  ); // Safeguard against undefined state

  const [locationState, setLocationState] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [permissionError, setPermissionError] = useState<boolean>(false);

  useEffect(() => {
    // Request permissions to access location
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setPermissionError(true);
        console.error("Permission to access location was denied.");
        return;
      }

      // Get current location
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocationState({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
      dispatch(
        setLocation({ latitude: coords.latitude, longitude: coords.longitude })
      ); // Dispatch to Redux
    };

    requestLocationPermission().catch((error) => {
      console.error("Error in requesting location permission:", error);
    });
  }, [dispatch]);

  const getLocation = useCallback(() => {
    // Request permission and get location
    const fetchLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setPermissionError(true);
        console.error("Permission to access location was denied.");
        return;
      }

      const fetchedLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      console.log(fetchedLocation);

      setLocationState({
        latitude: fetchedLocation.coords.latitude,
        longitude: fetchedLocation.coords.longitude,
      });

      dispatch(
        setLocation({
          latitude: fetchedLocation.coords.latitude,
          longitude: fetchedLocation.coords.longitude,
          heading: fetchedLocation.coords.heading, // Optional heading information
        })
      );
    };

    fetchLocation().catch((error) => {
      console.warn("Error fetching location:", error);
    });
  }, [dispatch]);

  return {
    location: locationState || location, // Prefer local state, then fallback to Redux state
    setLocation,
    setDestinations,
    destinations,
    getLocation,
    permissionError, // Expose permission error state
  };
};

export default useLocation;
