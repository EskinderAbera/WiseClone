import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("screen");

export const NAV_THEME = {
  light: {
    background: "hsl(0 0% 100%)", // background
    border: "hsl(240 5.9% 90%)", // border
    card: "hsl(0 0% 100%)", // card
    notification: "hsl(0 84.2% 60.2%)", // destructive
    primary: "hsl(240 5.9% 10%)", // primary
    text: "hsl(240 10% 3.9%)", // foreground
  },
  dark: {
    background: "hsl(240 10% 3.9%)", // background
    border: "hsl(240 3.7% 15.9%)", // border
    card: "hsl(240 10% 3.9%)", // card
    notification: "hsl(0 72% 51%)", // destructive
    primary: "hsl(0 0% 98%)", // primary
    text: "hsl(0 0% 98%)", // foreground
  },
};

export const accounts = [
  { id: "1", flag: "🇸🇬", amount: "15.00", currency: "Singapore Dollar" },
  { id: "2", flag: "🇦🇺", amount: "0.00", currency: "Australian Dollar" },
];

export const transactions = [
  { id: "1", type: "Paid", description: "For your Wise card", amount: "9 SGD" },
  {
    id: "2",
    type: "Added",
    description: "To your SGD balance",
    amount: "24 SGD",
  },
];

export const _imageWidth = 300;
export const _imageHeight = 200;
export const _spacing = 12;

export const sampleCards = [
  {
    id: "1",
    image: require("../../assets/virtual.png"),
    accountNo: "1234",
  },
  {
    id: "2",
    image: require("../../assets/virtual.png"),
    accountNo: "1234",
  },
  {
    id: "3",
    image: require("../../assets/virtual.png"),
    accountNo: "1234",
  },
];
