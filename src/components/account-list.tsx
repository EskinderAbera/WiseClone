import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { accounts, CELL_HEIGHT, CELL_WIDTH } from "@/lib/constants";

export default function AccountList() {
  const renderAccount = ({ item }: { item: any }) => (
    <View
      style={{ width: CELL_WIDTH, height: CELL_HEIGHT }}
      className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4"
    >
      <Image
        source={item.flag}
        alt={item.alt}
        style={{ width: 70, height: 70, marginBottom: "auto" }}
      />
      <View className="space-y-2">
        <Text className="text-xl font-bold dark:text-white">{item.amount}</Text>
        <Text className="text-sm text-gray-600 dark:text-gray-400">
          {item.currency}
        </Text>
      </View>
    </View>
  );
  return (
    <FlatList
      data={accounts} //List of Accounts should return from the API
      renderItem={renderAccount}
      keyExtractor={(item) => item.id}
      horizontal
      contentContainerStyle={{ marginTop: 16 }}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View className="w-4" />}
    />
  );
}
