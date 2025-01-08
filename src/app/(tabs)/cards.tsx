import React from "react";
import { ScrollView } from "react-native";

import CardList from "@/components/list-cards";
import ActionButtons from "@/components/action-buttons";
import WalletButtons from "@/components/wallet-buttons";

export default function Page() {
  return (
    <ScrollView contentContainerClassName="flex-1 bg-white dark:bg-black">
      <CardList />
      <ActionButtons />
      <WalletButtons />
    </ScrollView>
  );
}
