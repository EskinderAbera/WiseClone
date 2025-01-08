import { Tabs } from "expo-router";

import { useClientOnlyValue } from "@/components/use-client-only-value";
import { NAV_THEME } from "@/lib/constants";
import { useColorScheme } from "@/lib/use-color-scheme";
import {
  ArrowUp,
  CreditCard,
  Home,
  LayoutGrid,
  Users,
} from "@/components/icons";
import { View } from "react-native";

export default function TabLayout() {
  const { colorScheme } = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: NAV_THEME[colorScheme ?? "light"].text,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          height: 70,
          // paddingBottom: 10,
        },
        headerShadowVisible: false,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          headerShown: false,
          title: "Cards",
          tabBarIcon: ({ color }) => <CreditCard color={color} />,
        }}
      />
      <Tabs.Screen
        name="send-money"
        options={{
          headerShown: false,
          title: "Send",
          tabBarIcon: ({ color }) => (
            <View className="size-12 mb-3 rounded-full bg-[#aee67f] items-center justify-center">
              <ArrowUp className="size-6 text-black" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="recipients"
        options={{
          headerShown: false,
          title: "Recipients",
          tabBarIcon: ({ color }) => <Users color={color} />,
        }}
      />
      <Tabs.Screen
        name="manage"
        options={{
          headerShown: false,
          title: "Manage",
          tabBarIcon: ({ color }) => <LayoutGrid color={color} />,
        }}
      />
    </Tabs>
  );
}
