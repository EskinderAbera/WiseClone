import React from "react";
import { ScrollView } from "react-native";

import CardList from "@/components/list-cards";

export default function Page() {
  return (
    <ScrollView contentContainerClassName="flex-1 bg-white dark:bg-black">
      <CardList />
    </ScrollView>
  );
}
