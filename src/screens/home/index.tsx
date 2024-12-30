import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/navigation/type";
import { Button } from "@/src/components/button";
import InputField from "@/src/components/input/inputField";

export const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");

  const handleNavigate = () => {
    if (fromLocation && toLocation) {
      navigation.navigate("Map", { fromLocation, toLocation });
    } else {
      alert("Please fill in both locations");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.description}>Track public transport</Text>
      <InputField
        placeholder="From Location"
        value={fromLocation}
        onChangeText={setFromLocation}
        label={"From Location"}
      />
      <InputField
        placeholder="To Location"
        value={toLocation}
        onChangeText={setToLocation}
        label={"To Location"}
      />

      <Button title="Go to Map" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});
