import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  _imageHeight,
  _imageWidth,
  _spacing,
  sampleCards,
  width,
} from "@/lib/constants";

export default function CardList() {
  const { top } = useSafeAreaInsets();

  const renderCard = ({ item }: any) => (
    <View className="flex flex-col items-center">
      <Image
        source={item.image}
        style={{
          width: _imageWidth,
          height: _imageHeight,
          borderRadius: 16,
        }}
      />
      <Text className="dark:text-white mt-6">
        Digital Card •••• {item.accountNo.slice(-4)}
      </Text>
    </View>
  );

  return (
    <View style={{ paddingTop: top }}>
      <View className="px-4 mt-8">
        <Text className="text-4xl font-bold dark:text-white py-8">Cards</Text>
      </View>
      <FlatList
        data={sampleCards}
        keyExtractor={(item) => item.id}
        horizontal
        snapToInterval={_imageWidth + _spacing}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={renderCard}
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _imageWidth) / 2,
        }}
      />
    </View>
  );
}
