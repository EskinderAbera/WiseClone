import React from "react";
import { Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useColorScheme } from "@/lib/use-color-scheme";

export default function WalletButtons() {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <View className="flex flex-row items-center pl-8 pr-4 max-w-md mx-auto w-full gap-4 mt-8">
      <FontAwesome5
        name="apple-pay"
        size={24}
        color={isDarkColorScheme ? "white" : "black"}
      />
      <Text className="dark:text-white text-center mr-auto">
        Add to Apple Wallet
      </Text>
      <ChevronRight className="text-black dark:text-white" />
    </View>
  );
}
