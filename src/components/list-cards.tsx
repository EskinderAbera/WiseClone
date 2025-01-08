import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  _imageHeight,
  _imageWidth,
  _spacing,
  sampleCards,
  width,
} from "@/lib/constants";
import React from "react";

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
          // shadowColor: "#000",
          // shadowRadius: 4,
          // shadowOpacity: 0.3,
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
        }}
      />
      <Text className="dark:text-white">{item.accountNo}</Text>
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
