import React from "react";
import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import { Separator } from "@/components/ui/separator";
import DarkMode from "@/components/dark-mode";

export default function ManageMain() {
  return (
    <View className="p-4 space-y-6">
      <Text className="text-4xl font-bold dark:text-white py-8">Manage</Text>
      <View className="flex flex-row justify-between items-center">
        <Text className="dark:text-white">Copy your invite link</Text>
        <View>
          <Text className="text-sm bg-[#aee67f] px-4 py-1 rounded-full">
            Copy
          </Text>
        </View>
      </View>
      <View className="bg-gray-100 dark:bg-gray-800 mt-5 flex flex-row gap-4 py-8 rounded-lg">
        <Image
          source={require("../../assets/invite.png")}
          style={{ height: 80, width: 64 }}
        />
        <View className="flex-1">
          <Text className="text-base dark:text-gray-500 mb-auto">
            Earn 115 USD for every 3 friends who transfer over 300 USD.
          </Text>
          <Link href="#" className="text-green-600 underline">
            Learn more
          </Link>
        </View>
      </View>

      <View className="mt-8">
        <Text className="text-gray-600 text-lg dark:text-white">
          Account Services
        </Text>
        <View className="gap-4 mt-10">
          <DarkMode />
        </View>
      </View>
    </View>
  );
}
