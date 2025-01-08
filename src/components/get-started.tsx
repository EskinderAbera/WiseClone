import { Pressable, Text } from "react-native";

interface GetStartedProps {
  handleNext: () => void;
}

export default function GetStarted({ handleNext }: GetStartedProps) {
  return (
    <Pressable
      onPress={handleNext}
      className="w-full bg-[#9CD323] py-4 rounded-full mb-8"
    >
      <Text className="text-black text-center justify-center text-lg font-medium">
        Get started
      </Text>
    </Pressable>
  );
}
