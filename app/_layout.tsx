import { View, Text } from "react-native";
import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import {
  Redirect,
  Stack,
  Tabs,
  router,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";

const RootLayout = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  console.log("here", navigation.getId);

  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
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
              presentation: "modal",
              headerShown: false,
            }}
          />
        </Stack>
      </ApplicationProvider>
    </>
  );
};

export default RootLayout;
