import React from "react";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeHeader from "@/components/home-header";
import HomeMain from "@/components/home-main";

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
