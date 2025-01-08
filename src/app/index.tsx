import HomeHeader from "@/components/home-header";
import HomeMain from "@/components/home-main";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  const { top } = useSafeAreaInsets();
  return (
    <ScrollView className="flex-1 dark:bg-black">
      <View
        style={{ paddingTop: top }}
        className="flex flex-1 dark:bg-black px-4"
      >
        <HomeHeader />
        <HomeMain />
      </View>
    </ScrollView>
  );
}
