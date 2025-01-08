import React from "react";
import { View, Text } from "react-native";
import AccountList from "@/components/account-list";
import Transactions from "@/components/transactions";

export default function HomeMain() {
  return (
    <View className="p-4 space-y-6">
      <Text className="text-4xl font-bold dark:text-white py-8">Accounts</Text>
      <View className="flex flex-row gap-4">
        <View className="border border-input px-4 py-1 rounded-r-xl rounded-l-xl">
          <Text className="text-sm dark:text-white">All</Text>
        </View>
        <View className="border border-input px-4 py-1 rounded-r-xl rounded-l-xl">
          <Text className="text-sm dark:text-white">Interest</Text>
        </View>
      </View>
      <AccountList />
      <Transactions />
    </View>
  );
}
