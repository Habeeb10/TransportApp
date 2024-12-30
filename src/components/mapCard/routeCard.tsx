import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface RouteCardProps {
  origin: string;
  destination: string;
  estimatedTime: string;
}

const RouteCard: React.FC<RouteCardProps> = ({
  origin,
  destination,
  estimatedTime,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.routeText}>
        {origin} → {destination}
      </Text>
      <Text style={styles.time}>Estimated Time: {estimatedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  routeText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    color: "#4CAF50",
  },
});

export default RouteCard;
