import React from "react";
import { View } from "react-native";
import { CircleHelp } from "@/components/icons";

export default function ManageHeader() {
  return (
    <View className="flex flex-row-reverse w-full justify-between items-center px-4 py-2">
      <CircleHelp className="w-6 h-6 dark:text-white" />
    </View>
  );
}
