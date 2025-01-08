import { Link } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";

export default function StepOne() {
  return (
    <View className="px-4 pt-8 flex flex-col items-center w-full">
      <View className="relative w-full h-96 mb-8 justify-center">
        <Image
          source={require("../../assets/jar.png")}
          className="size-96"
          resizeMode="cover"
        />
      </View>
      <Text className="text-4xl font-black text-center leading-tight mb-12 dark:text-white">
        175 COUNTRIES. 50 CURRENCIES. ONE ACCOUNT
      </Text>
      <Link
        href="#"
        className="text-lg underline decoration-2 underline-offset-4 mb-6 dark:text-white"
      >
        Check our rates
      </Link>
      <Link
        href="#"
        className="w-full bg-[#9CD323] text-black py-4 rounded-full text-center text-lg font-medium mb-8"
      >
        Get started
      </Link>
    </View>
  );
}
