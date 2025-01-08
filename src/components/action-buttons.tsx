import React from "react";
import { View, Text } from "react-native";

import { Button } from "@/components/ui/button";
import { Plus, CreditCard, Snowflake } from "@/components/icons";

export default function ActionButtons() {
  return (
    <View className="flex flex-row gap-12 max-w-md mx-auto my-8">
      <View className="flex flex-col items-center gap-2">
        <Button size="icon" className="w-16 h-16 rounded-full bg-[#aee67f]">
          <Plus className="w-6 h-6 text-black" />
        </Button>
        <Text className="text-sm font-medium dark:text-white">Add money</Text>
      </View>
      <View className="flex flex-col items-center gap-2">
        <Button size="icon" className="w-16 h-16 rounded-full bg-[#aee67f]">
          <CreditCard className="w-6 h-6 text-black" />
        </Button>
        <Text className="text-sm font-medium dark:text-white">
          Card details
        </Text>
      </View>
      <View className="flex flex-col items-center gap-2">
        <Button size="icon" className="w-16 h-16 rounded-full bg-[#aee67f]">
          <Snowflake className="w-6 h-6 text-black" />
        </Button>
        <Text className="text-sm font-medium dark:text-white">Freeze card</Text>
      </View>
    </View>
  );
}
