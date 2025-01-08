import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolation,
  runOnJS,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("screen");

export default function SplashComponent() {
  const translateY = useSharedValue(height);
  const imageWidth = useSharedValue(50);
  const [animationComplete, setAnimationComplete] = React.useState(false);

  React.useEffect(() => {
    translateY.value = withTiming(-70, { duration: 1500 }, () => {
      // Trigger the second animation for image expansion after the arrow animation
      runOnJS(setAnimationComplete)(true); // Update state to reflect animation completion
      imageWidth.value = withTiming(width, { duration: 1000 }, () => {
        console.log("hello");
      }); // Expand to full screen
    });

    // First stage: Expand image to 200 width during arrow animation
    imageWidth.value = withTiming(200, { duration: 2000 });
  }, []);

  const arrowStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: animationComplete ? 0 : 1, // Hide arrow after animation
    };
  });

  const revealMaskStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        translateY.value,
        [0, height],
        [height, 0],
        Extrapolation.CLAMP
      ),
      transform: [{ translateY: translateY.value }],
      width: imageWidth.value, // Dynamically control the width
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.revealContainer}>
        <Animated.Image
          source={require("../../assets/background.png")}
          style={[styles.revealMask, revealMaskStyle]}
        />

        {/* Green overlay */}
        <Animated.View style={styles.greenOverlay} />
      </View>

      {/* Animated arrow */}
      {!animationComplete && ( // Render arrow only if animation isn't complete
        <Animated.View style={[styles.arrow, arrowStyle]}>
          <View style={styles.arrowShape} />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  revealContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
  greenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#B4E197",
  },
  revealMask: {
    position: "absolute",
    alignSelf: "center", // Center the image horizontally
    backgroundColor: "white",
    zIndex: 1,
  },
  arrow: {
    position: "absolute",
    left: "50%",
    right: "50%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  arrowShape: {
    width: 100,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 50,
  },
});
