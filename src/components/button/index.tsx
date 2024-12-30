import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
    height: 50,
    alignSelf: "center",
    marginTop: 50,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});
