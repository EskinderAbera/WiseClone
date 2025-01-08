import React from "react";
import { View, Text } from "react-native";
import { Button } from "@/components/ui/button";
import { Bell } from "@/components/icons";

export default function HomeHeader() {
  return (
    <View className="flex flex-row w-full justify-between items-center px-4 py-2">
      <View className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
        <Text className="text-sm font-medium dark:text-white">YX</Text>
      </View>
      <View className="flex flex-row items-center gap-4">
        <Button
          size="sm"
          className="bg-[#CDFF9B] hover:bg-[#CDFF9B]/90 rounded-full"
        >
          <Text className="text-sm text-black dark:text-gray-900 ">
            Earn $115
          </Text>
        </Button>
        <Bell className="w-6 h-6 dark:text-white" />
      </View>
    </View>
  );
}
