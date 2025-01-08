import "../global.css";

import React from "react";
import { Platform } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { type Theme, ThemeProvider } from "@react-navigation/native";

import { useColorScheme } from "@/lib/use-color-scheme";
import { getItem, setItem } from "@/lib/storage";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { NAV_THEME } from "@/lib/constants";

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
  fonts: {
    regular: {
      fontFamily: "Inter-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Inter-Medium",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "Inter-Bold",
      fontWeight: "bold",
    },
    heavy: {
      fontFamily: "Inter-Black",
      fontWeight: "900",
    },
  },
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
  fonts: {
    regular: {
      fontFamily: "Inter-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Inter-Medium",
      fontWeight: "500",
    },
    bold: {
      fontFamily: "Inter-Bold",
      fontWeight: "bold",
    },
    heavy: {
      fontFamily: "Inter-Black",
      fontWeight: "900",
    },
  },
};

export default function Layout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const theme = getItem("theme");
      if (Platform.OS === "web") {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add("bg-background");
      }
      if (!theme) {
        setAndroidNavigationBar(colorScheme);
        setItem("theme", colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === "dark" ? "dark" : "light";
      setAndroidNavigationBar(colorTheme);
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })();
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Slot />
    </ThemeProvider>
  );
}
