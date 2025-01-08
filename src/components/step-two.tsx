import React from "react";
import { View, Text, Image } from "react-native";
import { Link } from "expo-router";

export default function StepTwo() {
  return (
    <View className="pt-8 flex flex-col items-center w-full">
      <View className="relative w-full h-96 mb-8 justify-center">
        <Image
          source={require("../../assets/jar.png")}
          className="size-96"
          resizeMode="cover"
        />
      </View>
      <Text className="text-4xl font-black text-center leading-tight mb-12 dark:text-white">
        SEND MONEY AND GET PAID ABROAD
      </Text>
      <Link
        href="#"
        className="text-lg underline decoration-2 underline-offset-4 mb-6 dark:text-white"
      >
        Check our rates
      </Link>
    </View>
  );
}
