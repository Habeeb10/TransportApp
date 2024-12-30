import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Home: undefined;
  Map: { fromLocation: string; toLocation: string };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Stack = createNativeStackNavigator<RootStackParamList>();
