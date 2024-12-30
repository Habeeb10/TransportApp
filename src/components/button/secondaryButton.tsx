import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface SecondaryButtonProps {
  onPress: () => void;
  title: string;
  disabled?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  onPress,
  title,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, disabled && styles.disabledButtonText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#4CAF50",
    alignItems: "center",
  },
  buttonText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#f2f2f2",
    borderColor: "#ddd",
  },
  disabledButtonText: {
    color: "#aaa",
  },
});

export default SecondaryButton;
