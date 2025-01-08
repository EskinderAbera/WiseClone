import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import StepTwo from "@/components/step-two";
import ProgressBar from "@/components/progress-bar";
import GetStarted from "@/components/get-started";
import StepOne from "@/components/step-one";
import { setItem } from "@/lib/storage";
import { useRouter } from "expo-router";

const steps = 2;

export default function Page() {
  const { top } = useSafeAreaInsets();
  const router = useRouter();

  const [currentStep, setCurrentStep] = React.useState(0);

  const handleNext = () => {
    if (currentStep < steps - 1) setCurrentStep(currentStep + 1);
    if (currentStep === 1) {
      setItem("onboard", "true");
      router.replace("/");
    }
  };

  return (
    <View
      style={{ paddingTop: top }}
      className="flex flex-1 items-center dark:bg-black px-4"
    >
      <ProgressBar value={currentStep === 0 ? 50 : 100} />
      {currentStep === 0 ? <StepOne /> : <StepTwo />}

      <GetStarted handleNext={handleNext} />
    </View>
  );
}
