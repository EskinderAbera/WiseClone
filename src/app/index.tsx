import React from "react";
import { View, Text } from "react-native";
import StepTwo from "@/components/step-two";

export default function Page() {
  return (
    <View className="flex flex-1 items-center dark:bg-black">
      <View className="px-4 pt-4 w-full">
        <Text className="dark:text-white">Progress</Text>
      </View>
      <StepTwo />
    </View>
  );
}
