import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TransportCardProps {
  title: string;
  description: string;
  time: string;
}

const TransportCard: React.FC<TransportCardProps> = ({
  title,
  description,
  time,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.time}>{time}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginVertical: 5,
  },
  time: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "600",
  },
});

export default TransportCard;
