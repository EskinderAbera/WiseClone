import React from "react";
import { View, Text, Pressable } from "react-native";
import { transactions } from "@/lib/constants";
import { ArrowUp } from "@/components/icons";

export default function Transactions() {
  return (
    <View className="mt-4">
      <View className="flex flex-row items-center mb-4 mt-6">
        <Text className="text-2xl font-bold dark:text-white mr-auto">
          Transactions
        </Text>
        <Pressable>
          <Text className="text-black dark:text-white underline">See all</Text>
        </Pressable>
      </View>
      {transactions.map((transaction) => (
        <View className="space-y-4 my-4" key={transaction.id}>
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-4">
              <View className="size-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <ArrowUp className="size-5 dark:text-white" />
              </View>
              <View>
                <Text className="font-medium dark:text-white">
                  {transaction.description}
                </Text>
                <Text className="text-gray-600 dark:text-gray-400 text-sm">
                  Paid · Today
                </Text>
              </View>
            </View>
            <Text className="font-medium dark:text-white">
              {transaction.amount}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
