import "../global.css";

import React from "react";
import { Platform } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { Asset } from "expo-asset";
import {
  type Theme,
  ThemeProvider,
  DefaultTheme,
} from "@react-navigation/native";

import { useColorScheme } from "@/lib/use-color-scheme";
import { getItem, setItem } from "@/lib/storage";
import { setAndroidNavigationBar } from "@/lib/android-navigation-bar";
import { NAV_THEME } from "@/lib/constants";
import SplashComponent from "@/components/splash-component";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] =
    React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        // Load image
        await Asset.loadAsync([require("../../assets/background.png")]);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

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

  const onAnimationFinish = () => {
    setSplashAnimationFinished(true);
  };

  if (!splashAnimationFinished) {
    return <SplashComponent onAnimationFinish={onAnimationFinish} />;
  }

  if (!isColorSchemeLoaded || !isReady) {
    return null;
  }
  return (
    // <AnimateLoader>
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Slot />
    </ThemeProvider>
    // </AnimateLoader>
  );
}
