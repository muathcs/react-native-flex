import { View, Text } from "react-native";
import React from "react";
import { Redirect, Stack, Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="exercise"
          options={{
            // headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;