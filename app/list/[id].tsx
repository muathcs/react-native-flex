import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>DetailsPage for id: {id}</Text>
    </View>
  );
};

export default DetailsPage;
