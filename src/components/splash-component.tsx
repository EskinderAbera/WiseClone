import React, { useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolation,
  runOnJS,
} from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { ArrowUp } from "./icons";
import { height, width as screenWidth } from "@/lib/constants";

interface SplashComponentProps {
  onAnimationFinish: () => void;
}

export default function SplashComponent({
  onAnimationFinish,
}: SplashComponentProps) {
  const progress = useSharedValue(0);

  const maskStyle = useAnimatedStyle(() => {
    const maskWidth = interpolate(
      progress.value,
      [0, 1],
      [60, screenWidth],
      Extrapolation.CLAMP
    );

    return {
      position: "absolute",
      width: maskWidth,
      height: height,
      backgroundColor: "transparent",
      alignSelf: "center",
      overflow: "hidden",
    };
  });

  const backgroundStyle = useAnimatedStyle(() => {
    return {
      width: screenWidth,
      height: height,
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [-screenWidth / 2 + 30, 0],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      width: screenWidth,
      height: height,
      backgroundColor: "#86e75b",
      alignItems: "center" as const,
      justifyContent: "center" as const,
      transform: [
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [0, -height],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            progress.value,
            [0, 1],
            [height, height * 0.3],
            Extrapolation.CLAMP
          ),
        },
      ],
      opacity: interpolate(
        progress.value,
        [0, 0.8, 1],
        [1, 1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      progress.value = withTiming(
        1,
        {
          duration: 1500,
          easing: Easing.inOut(Easing.ease),
        },
        () => {
          runOnJS(onAnimationFinish)();
        }
      );
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.container, { backgroundColor: "#86e75b" }]}>
        <Animated.View style={maskStyle}>
          <Animated.View style={backgroundStyle}>
            <ImageBackground
              source={require("../../assets/background.png")}
              style={styles.background}
            />
          </Animated.View>
        </Animated.View>

        <Animated.View style={overlayStyle}>
          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={styles.logo}
          />
        </Animated.View>

        <Animated.View style={[styles.arrowContainer, arrowStyle]}>
          <ArrowUp color="#000" size={40} />
        </Animated.View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 300,
  },
  arrowContainer: {
    alignSelf: "center",
    width: 60,
    height: 60,
    position: "absolute",
    backgroundColor: "red",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
});
