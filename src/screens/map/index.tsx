import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { useRoute, RouteProp } from "@react-navigation/native";
import { getCoordinates } from "../../utils/coordinate";

type MapScreenParams = {
  MapScreen: {
    fromLocation: string;
    toLocation: string;
  };
};

type Coordinates = {
  latitude: number;
  longitude: number;
};

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiYWJpYjEwMCIsImEiOiJjbTVhMm9oZnEzemF3MmpwN3prZ3o4ZGtvIn0.c7zqMK2oSAWgKBx_-p0r5w"
);

const MapScreen = () => {
  const route = useRoute<RouteProp<MapScreenParams, "MapScreen">>();
  const { fromLocation, toLocation } = route.params;
  const [fromCoords, setFromCoords] = useState<Coordinates | null>(null);
  const [toCoords, setToCoords] = useState<Coordinates | null>(null);
  const [currentCoords, setCurrentCoords] = useState<Coordinates | null>(null); // Tracker
  const [polylineCoords, setPolylineCoords] = useState<Coordinates[]>([]); // Polyline

  useEffect(() => {
    const resolveLocations = async () => {
      const from = await getCoordinates(fromLocation);
      const to = await getCoordinates(toLocation);

      setFromCoords(from);
      setToCoords(to);
      setCurrentCoords(from); // Initialize tracker position
      setPolylineCoords([from]); // Initialize polyline path
    };

    resolveLocations();
  }, [fromLocation, toLocation]);

  // Simulate tracker movement
  useEffect(() => {
    if (fromCoords && toCoords) {
      const interval = setInterval(() => {
        setCurrentCoords((prev) => {
          if (!prev) return fromCoords;

          // Simulate movement towards the destination
          const nextLat =
            prev.latitude + (toCoords.latitude - prev.latitude) * 0.05;
          const nextLng =
            prev.longitude + (toCoords.longitude - prev.longitude) * 0.05;

          const nextCoords = { latitude: nextLat, longitude: nextLng };
          setPolylineCoords((prevPath) => [...prevPath, nextCoords]);

          // Stop simulation if close to destination
          if (
            Math.abs(nextLat - toCoords.latitude) < 0.0001 &&
            Math.abs(nextLng - toCoords.longitude) < 0.0001
          ) {
            clearInterval(interval);
          }

          return nextCoords;
        });
      }, 1000); // Update every second

      return () => clearInterval(interval);
    }
  }, [fromCoords, toCoords]);

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.mapStyle}>
        {fromCoords && (
          <MapboxGL.PointAnnotation
            id="fromLocation"
            coordinate={[fromCoords.longitude, fromCoords.latitude]}
          >
            <View style={styles.marker}>
              <View style={styles.markerInner} />
            </View>
          </MapboxGL.PointAnnotation>
        )}
        {toCoords && (
          <MapboxGL.PointAnnotation
            id="toLocation"
            coordinate={[toCoords.longitude, toCoords.latitude]}
          >
            <View style={[styles.marker, { backgroundColor: "blue" }]}>
              <View style={styles.markerInner} />
            </View>
          </MapboxGL.PointAnnotation>
        )}
        {currentCoords && (
          <MapboxGL.PointAnnotation
            id="tracker"
            coordinate={[currentCoords.longitude, currentCoords.latitude]}
          >
            <View style={[styles.marker, { backgroundColor: "green" }]}>
              <View style={styles.markerInner} />
            </View>
          </MapboxGL.PointAnnotation>
        )}
        {polylineCoords.length > 1 && (
          <MapboxGL.ShapeSource
            id="polyline"
            shape={{
              type: "Feature",
              geometry: {
                type: "LineString",
                coordinates: polylineCoords.map((coord) => [
                  coord.longitude,
                  coord.latitude,
                ]),
              },
            }}
          >
            <MapboxGL.LineLayer
              id="lineLayer"
              style={{ lineWidth: 4, lineColor: "red" }}
            />
          </MapboxGL.ShapeSource>
        )}
      </MapboxGL.MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    flex: 1,
  },
  marker: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  markerInner: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
