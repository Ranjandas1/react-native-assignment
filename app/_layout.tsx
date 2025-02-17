import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "none",
        headerShown: false,
        contentStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="Details" />
    </Stack>
  );
}
