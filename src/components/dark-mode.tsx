import React from "react";
import { View, Text } from "react-native";
import { cva } from "class-variance-authority";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useColorScheme } from "@/lib/use-color-scheme";
import { MoonStar, Sun } from "@/components/icons";
import { setItem } from "@/lib/storage";
import { cn } from "@/lib/utils";

const segmentedControlVariants = cva(
  " flex-1 items-center justify-center h-7 text-slate-950 gap-x-4",
  {
    variants: {
      active: {
        true: "rounded-lg h-11 flex-row",
        false: "bg-transparent px-3 text-slate-600 sm:w-auto flex-row",
      },
    },
  }
);

const items = ["Dark", "Light"];

export default function DarkMode() {
  const { setColorScheme, isDarkColorScheme } = useColorScheme();
  const [activeItem, setActiveItem] = React.useState(isDarkColorScheme ? 0 : 1);
  const handleChange = (index: number, value: string) => {
    if (index === activeItem) {
      return;
    }
    setActiveItem(index);
    setColorScheme(index === 0 ? "dark" : "light");
    setItem("theme", value.toLowerCase());
  };

  return (
    <View>
      <Text>DarkMode</Text>
      <Separator className="my-4" />
      <View className="flex-row h-12 items-center justify-between rounded-lg bg-muted p-1">
        {items.map((item, index) => (
          <Button
            key={index}
            size="sm"
            className={segmentedControlVariants({
              active: activeItem === index,
            })}
            onPress={() => handleChange(index, item)}
          >
            {index === 0 ? (
              <MoonStar
                className="text-foreground dark:text-black"
                size={20}
                strokeWidth={1.25}
              />
            ) : (
              <Sun
                className="dark:text-black"
                size={20}
                strokeWidth={1.25}
                color={activeItem === 1 && "#fff"}
              />
            )}
            <Text>{item}</Text>
          </Button>
        ))}
      </View>
    </View>
  );
}
