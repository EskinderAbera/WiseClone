import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import { accounts, transactions } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowUp, Plus } from "./icons";

const { width } = Dimensions.get("window");

const CELL_WIDTH = width * 0.5;
const CELL_HEIGHT = CELL_WIDTH * 1.2;
export default function HomeMain() {
  const renderAccount = ({ item }: { item: any }) => (
    <View
      style={{ width: CELL_WIDTH, height: CELL_HEIGHT }}
      className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4"
    >
      <View className="w-10 h-10 mb-auto">
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Singapore flag"
          width={40}
          height={40}
          className="rounded-full"
        />
      </View>
      <View className="space-y-2">
        <Text className="text-xl font-bold dark:text-white">{item.amount}</Text>
        <Text className="text-sm text-gray-600 dark:text-gray-400">
          {item.currency}
        </Text>
      </View>
    </View>
  );
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
      {/* cards */}
      <FlatList
        data={accounts}
        renderItem={renderAccount}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ marginTop: 16 }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="w-4" />}
      />

      {/* Transactions Section */}
      <View className="mt-4">
        <View className="flex flex-row justify-between items-center mb-4">
          <Text className="text-2xl font-bold dark:text-white">
            Transactions
          </Text>
          <Button variant="link">
            <Text className="text-black dark:text-white underline">
              See all
            </Text>
          </Button>
        </View>
        {transactions.map((transaction) => (
          <View className="space-y-4 mb-4" key={transaction.id}>
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
    </View>
  );
}
